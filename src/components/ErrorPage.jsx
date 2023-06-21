const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2">
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p className="text-gray-500 text-md">
        Sorry, an unexpected error has occurred.
      </p>
      <p>It can be either :</p>
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold text-red-500">
          The provided URL does't work anymore.
        </p>
        <p>Or</p>
        <p className="font-semibold text-red-500">
          You have exceeded the YOUTUBE API call limit.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
