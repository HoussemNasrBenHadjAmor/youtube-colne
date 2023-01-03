import axios from "axios";

const url = import.meta.env.VITE_YOUTUBE_URL;
const apiKey = import.meta.env.VITE_YOUTUBE_API;

export const fetchSearch = async (search) => {
  try {
    const { data } = await axios.get(
      `${url}search?key=${apiKey}&part=snippet&q=${search}&maxResults=50&type=channel,video`
    );

    return data;
  } catch (error) {
    return error;
  }
};
