const About = ({ description, join, views, location }) => {
  const viewCount =
    views > 1 ? parseInt(views).toLocaleString() + " views" : views + " view";

  const Line = () => <div className="border-b-[1px] opacity-60" />;

  return (
    <div className="flex flex-col md:flex-row text-white gap-5">
      <div className="flex flex-col gap-4 md:w-[70%]">
        <p>Description</p>
        <p>{description}</p>
        <p>Location</p>
        <p>{location}</p>
      </div>

      <Line />

      <div className="md:w-[30%] flex flex-col gap-3">
        <p>Stats</p>
        <Line />
        <p>Joined on {new Date(join).toDateString()}</p>
        <Line />
        <p>{viewCount}</p>
      </div>
    </div>
  );
};

export default About;
