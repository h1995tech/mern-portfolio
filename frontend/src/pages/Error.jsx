import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  console.error(error);

  return (
    <main>
      <h1>Error</h1>
      <p>{error?.message || error?.statusText || "Something went wrong"}</p>
    </main>
  );
}