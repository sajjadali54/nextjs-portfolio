This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact form

The contact form uses a Formspree endpoint. Create a form with Formspree, then set
`NEXT_PUBLIC_FORMSPREE_ENDPOINT` to its public form endpoint in `.env.local` and
in the deployment environment. Do not put an API key or password in this
variable. Until the endpoint is configured, the contact page shows a direct
email option instead of presenting a nonfunctional form.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Prisma

This project uses [Prisma](https://prisma.io) for database management.

To get started, run `npx prisma migrate dev` and `npx prisma db seed`.

```sh
npx init
npx prisma migrate dev --name init
```
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
