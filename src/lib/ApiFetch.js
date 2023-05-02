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

export const getRelatedVideo = async (id) => {
  try {
    const { data } = await axios.get(
      `${url}search?part=snippet&relatedToVideoId=${id}&key=${apiKey}&type=video&maxResults=15`
    );

    return data;
  } catch (error) {
    return error;
  }
};

export const getVideoDetails = async (id) => {
  try {
    const { data } = await axios.get(
      `${url}videos?part=snippet,statistics&id=${id}&maxResults=15&key=${apiKey}`
    );

    return data;
  } catch (error) {
    return error;
  }
};

export const getChannelDetailsBySearch = async (term) => {
  try {
    const { data } = await axios.get(
      `${url}search?key=${apiKey}&part=snippet&q=${term}&maxResults=50&type=channel`
    );
    return data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const getChannelDetails = async (term) => {
  try {
    const response = await axios.get(
      `${url}channel?forUsername=${term}&part=snippet&key=${apiKey}`
    );

    console.log("taadet");

    console.log("data channel ", response);
    return data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
