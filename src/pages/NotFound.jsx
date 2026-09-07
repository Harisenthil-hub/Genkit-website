import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Genkit</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>

        <Link to="/">
          Back to Home
        </Link>
      </main>
    </>
  );
}