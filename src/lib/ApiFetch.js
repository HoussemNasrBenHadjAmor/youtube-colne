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
    return error;
  }
};

export const getChannelDetails = async (id) => {
  try {
    const { data } = await axios.get(
      `${url}channels?part=snippet,contentDetails,statistics,brandingSettings&id=${id}&maxResults=1&key=${apiKey}`
    );

    return data;
  } catch (error) {
    return error;
  }
};

export const getChannelPlaylist = async (id) => {
  try {
    const { data } = await axios.get(
      `${url}playlists?part=id,snippet,contentDetails&channelId=${id}&maxResults=50&key=${apiKey}`
    );

    console.log(data);

    return data;
  } catch (error) {
    return error;
  }
};

export const getChannelPlayListItems = async (id) => {
  try {
    const { data } = await axios.get(
      `${url}playlistItems?part=snippet,contentDetails,status&playlistId=PL6QREj8te1P5k_kIM2-8E4VP9Sej0Yez3&maxResults=50&key=${apiKey}`
    );

    console.log(data);

    return response;
  } catch (error) {
    return error;
  }
};

export const getChannelVideos = async (id) => {
  try {
    const response = await axios.get(
      `${url}search?part=snippet&channelId=${id}&maxResults=50&order=date&key=${apiKey}`
    );
    console.log("videos", response);
    return response;
  } catch (error) {
    return error;
  }
};
