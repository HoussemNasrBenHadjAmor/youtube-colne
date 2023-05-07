import { Link } from "react-router-dom";
import millify from "millify";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Banner = ({ channelDetails, idChannel }) => {
  const { snippet, brandingSettings, statistics } = channelDetails;
  return (
    <div className="flex flex-col gap-6">
      <div>
        <img
          src={brandingSettings?.image?.bannerExternalUrl}
          alt="banner_profile_image"
          className="w-full h-24 sm:h-32 md:h-56 object-cover"
        />
      </div>

      <div>
        <div className="flex gap-6 max-w-5xl mx-auto items-center">
          <div className="hidden md:flex">
            <img
              src={snippet?.thumbnails?.default?.url}
              alt="profile_image"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-white text-xl md:text-2xl">
              {snippet?.title}
            </h1>

            <div className="flex gap-2 items-center text-sm">
              <p className="opacity-90">{snippet?.customUrl}</p>
              <p>{millify(statistics?.subscriberCount)} Subscribers</p>
              <p>{statistics?.videoCount} Videos</p>
            </div>

            <div className="max-w-lg flex items-center gap-2">
              <p className="truncate text-sm">{snippet?.description}</p>
              <Link to={`/channel/${idChannel}/about`}>
                <ChevronRightIcon className="w-5 h-5 object-cover text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
