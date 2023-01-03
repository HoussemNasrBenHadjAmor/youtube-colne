import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p className="text-gray-500 text-md">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-400 text-sm">
        {error?.statusText || error?.message}
      </p>
    </div>
  );
};

export default ErrorPage;
