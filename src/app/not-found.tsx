import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="panel max-w-xl p-10 text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-6 text-4xl font-semibold">This page drifted out of orbit.</h1>
        <p className="mt-4 text-base text-muted-foreground">
          The page you are looking for is not available right now. Head back to the homepage and continue exploring Scalezix.
        </p>
        <Link href="/" className="button-primary mt-8">
          Return Home
        </Link>
      </div>
    </main>
  );
}
