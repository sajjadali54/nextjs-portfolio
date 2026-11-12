// One-off: crop and resize portfolio photos into public/photos/.
// Usage: node scripts/prepare-photos.mjs private-resumes/photos
// Originals stay in the gitignored private-resumes/photos; only processed copies are public.
import path from "node:path";
import sharp from "sharp";

const source = process.argv[2];
if (!source) throw new Error("Pass the folder that holds the original photos.");
const out = path.join(process.cwd(), "public", "photos");

const jobs = [
  {
    // Badri award: crop to Sajjad and the presenter, excluding the on-screen
    // video-call tiles that show colleagues' names.
    input: "IMG_9156.JPG",
    output: "badri-recognition.jpg",
    // Blur (in original-image pixels) the name label between the two people and
    // the colleagues visible in the video-call tiles near the crop edges.
    blur: [
      { left: 2230, top: 1060, width: 780, height: 160 },
      { left: 2200, top: 2460, width: 260, height: 160 },
      { left: 3650, top: 1900, width: 400, height: 600 },
      { left: 1250, top: 2000, width: 300, height: 700 },
    ],
    extract: { left: 1300, top: 855, width: 2650, height: 2601 },
    width: 1200,
  },
  { input: "Graduation photo.jpg", output: "graduation-silver-medal.jpg", width: 960 },
  { input: "ntnu-image.jpg", output: "ntnu-exchange.jpg", width: 400 },
];

const { mkdir } = await import("node:fs/promises");
await mkdir(out, { recursive: true });

for (const job of jobs) {
  const file = path.join(source, job.input);
  let buffer = await sharp(file).rotate().toBuffer();
  if (job.blur) {
    const patches = await Promise.all(
      job.blur.map(async (rect) => ({
        input: await sharp(buffer).extract(rect).blur(40).toBuffer(),
        left: rect.left,
        top: rect.top,
      })),
    );
    buffer = await sharp(buffer).composite(patches).toBuffer();
  }
  let image = sharp(buffer);
  if (job.extract) image = image.extract(job.extract);
  const info = await image
    .resize({ width: job.width, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(out, job.output));
  console.log(`${job.output}: ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
}
