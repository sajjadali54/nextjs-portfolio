import Link from "next/link";

export default function NotFound() {
  return (
    <main className="d-flex align-items-center justify-content-center min-vh-100 px-3">
      <div className="text-center" style={{ maxWidth: "560px" }}>
        <p
          className="mb-3 fw-semibold"
          style={{ letterSpacing: "0.2em", color: "var(--primary)" }}
        >
          404
        </p>
        <h1 className="mb-3 display-5 fw-bold">Page not found</h1>
        <p className="text-muted mb-4">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Link
          href="/"
          className="btn btn-primary px-4 py-3 rounded-pill shadow-sm"
          style={{ background: "var(--primary)", border: "none", fontWeight: 600 }}
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
