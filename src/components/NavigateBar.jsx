import { Link, useLocation } from "react-router-dom";

const NavigateBar = ({ id }) => {
  const { pathname } = useLocation();

  const Navigate = [
    {
      name: "Home",
      to: `/channel/${id}`,
    },

    {
      name: "PlayLists",
      to: `/channel/${id}/playlists`,
    },

    {
      name: "About",
      to: `/channel/${id}/about`,
    },
  ];

  const SingleNavigate = ({ name, to }) => (
    <div>
      <Link to={to}>
        <p
          className={`uppercase px-3 pb-2 font-semibold text-xs sm:text-base ${
            pathname === to && "border-b-2 text-white"
          }`}
        >
          {name}
        </p>
      </Link>
    </div>
  );

  return (
    <div className="flex gap-5 items-center border-b-[1px] border-b-zinc-700">
      {Navigate.map(({ name, to }) => (
        <SingleNavigate name={name} to={to} key={name} />
      ))}
    </div>
  );
};

export default NavigateBar;
