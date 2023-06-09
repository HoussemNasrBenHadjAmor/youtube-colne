import { HomeLoader } from "../";

const ProfileHomeLoader = () => {
  const Banner = () => (
    <div className="flex gap-6 items-center px-3 animate-pulse">
      <div className="hidden md:flex bg-[#353535] w-36 h-36 rounded-full object-cover" />
      <div className="flex flex-col gap-3 w-full flex-1">
        <div className="bg-[#353535] h-7 rounded-sm w-36" />

        <div className="flex gap-2 items-center max-w-3xl w-full">
          <div className="bg-[#353535] h-4 w-24 rounded-sm" />
          <div className="bg-[#353535] h-4 w-16 rounded-sm" />
          <div className="bg-[#353535] h-4 w-14 rounded-sm" />
        </div>

        <div className="flex items-center gap-2 max-w-md">
          <div className="bg-[#353535] h-6 w-full rounded-sm" />
        </div>
      </div>
    </div>
  );

  const NavigateBar = () => (
    <div>
      <p>NavigateBar</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-10 min-h-screen animate-pulse">
      //*here goes the cover profile image loader//*
      <div className="" />
      <div className="max-w-5xl mx-auto flex flex-col w-full gap-10">
        <Banner />
        <NavigateBar />
        <HomeLoader />
      </div>
    </div>
  );
};

export default ProfileHomeLoader;
