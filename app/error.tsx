"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="d-flex align-items-center justify-content-center min-vh-100 px-3">
          <div className="text-center" style={{ maxWidth: "560px" }}>
            <p
              className="mb-3 fw-semibold"
              style={{ letterSpacing: "0.2em", color: "#0ea5e9" }}
            >
              ERROR
            </p>
            <h1 className="mb-3 display-5 fw-bold">Something went wrong</h1>
            <p className="text-muted mb-4">
              The app hit an unexpected issue. Please try again.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="btn btn-primary px-4 py-3 rounded-pill"
              style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #f59e0b 100%)",
                border: "none",
                fontWeight: 600,
              }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
