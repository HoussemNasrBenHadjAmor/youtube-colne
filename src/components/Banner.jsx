import { Link } from "react-router-dom";
import millify from "millify";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Banner = ({ channelDetails, idChannel }) => {
  const { snippet, statistics } = channelDetails;
  return (
    <div className="w-auto">
      <div className="flex gap-6 items-center px-3">
        <div className="hidden md:flex">
          <img
            src={snippet?.thumbnails?.default?.url}
            alt="profile_image"
            className="w-36 h-36 rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-xl md:text-2xl">{snippet?.title}</h1>

          <div className="flex gap-2 items-center text-sm">
            <p className="opacity-90">{snippet?.customUrl}</p>
            <p>{millify(statistics?.subscriberCount)} Subscribers</p>
            <p>{statistics?.videoCount} Videos</p>
          </div>

          <div className="flex items-center gap-2 max-w-md md:w-full w-56">
            <p className="text-xs truncate">{snippet?.description}</p>
            <Link to={`/channel/${idChannel}/about`}>
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
