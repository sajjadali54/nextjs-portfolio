import "./howIWork.css";

const steps = [
  {
    title: "Understand the pain points",
    description:
      "I sit with the actuaries to see where their current process is slow, manual, or error-prone.",
  },
  {
    title: "Agree requirements and a timeline",
    description:
      "We list every requirement, elicit the details behind each one, and agree a realistic delivery plan.",
  },
  {
    title: "Build with an actuary in the loop",
    description:
      "One member of their team reviews each stage, so the software stays aligned with how they actually work.",
  },
  {
    title: "Validate and refine",
    description:
      "At every checkpoint we confirm each requirement still holds, or replace it with a better alternative, before the next release.",
  },
];

export default function HowIWork() {
  return (
    <section className="how-i-work section-panel" aria-labelledby="how-heading">
      <div className="how-i-work-intro">
        <p className="about-eyebrow mb-2">How I work</p>
        <h2 id="how-heading" className="how-i-work-title">
          Actuaries own the formulas. I make them dependable software.
        </h2>
      </div>

      <ol className="how-i-work-steps">
        {steps.map((step, index) => (
          <li key={step.title} className="how-i-work-step">
            <span className="how-i-work-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="how-i-work-step-title">{step.title}</h3>
            <p className="how-i-work-step-text">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
