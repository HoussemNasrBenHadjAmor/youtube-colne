import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = import.meta.env.VITE_YOUTUBE_URL;
const apiKey = import.meta.env.VITE_YOUTUBE_API;

export const usefetchSearch = (search, number) => {
  return useQuery({
    queryKey: ["fetchSearch", search, number],
    queryFn: async () => {
      const {
        data: { items },
      } = await axios.get(
        `${url}search?key=${apiKey}&part=snippet&q=${search}&maxResults=${
          number || 50
        }&type=channel,video`
      );
      return items;
    },
  });
};

export const useRelatedVideo = (id) => {
  return useQuery({
    queryKey: ["relatedVideo", id],
    queryFn: async () => {
      const {
        data: { items },
      } = await axios.get(
        `${url}search?part=snippet&relatedToVideoId=${id}&key=${apiKey}&type=video&maxResults=15`
      );
      return items;
    },
  });
};

export const useVideoDetails = (id) => {
  return useQuery({
    queryKey: ["videoDetails", id],
    queryFn: async () => {
      const {
        data: { items },
      } = await axios.get(
        `${url}videos?part=snippet,statistics&id=${id}&maxResults=15&key=${apiKey}`
      );
      return items;
    },
  });
};

export const useChannelDetailsBySearch = (term) => {
  return useQuery({
    queryKey: ["channelDetailsBySearch", term],
    queryFn: async () => {
      const {
        data: { items },
      } = await axios.get(
        `${url}search?key=${apiKey}&part=snippet&q=${term}&maxResults=50&type=channel`
      );
      return items;
    },
  });
};

export const useChannelDetails = (id) => {
  return useQuery({
    queryKey: ["channelDetails", id],
    queryFn: async () => {
      const {
        data: { items },
      } = await axios.get(
        `${url}channels?part=snippet,contentDetails,statistics,brandingSettings&id=${id}&maxResults=1&key=${apiKey}`
      );
      return items;
    },
  });
};

export const useChannelPlaylist = (id) => {
  return useQuery({
    queryKey: ["channelDetails", id],
    queryFn: async () => {
      const {
        data: { items },
      } = await axios.get(
        `${url}playlists?part=id,snippet,contentDetails&channelId=${id}&maxResults=50&key=${apiKey}`
      );
      return items;
    },
  });
};

export const useChannelPlayListItems = (id) => {
  return useQuery({
    queryKey: ["channelDetails", id],
    queryFn: async () => {
      const {
        data: { items },
      } = await axios.get(
        `${url}playlistItems?part=snippet,contentDetails,status&playlistId=${id}&maxResults=50&key=${apiKey}`
      );
      return items;
    },
  });
};

export const useChannelVideos = (id) => {
  return useQuery({
    queryKey: ["channelDetails", id],
    queryFn: async () => {
      const {
        data: { items },
      } = await axios.get(
        `${url}search?part=snippet&channelId=${id}&maxResults=50&order=date&key=${apiKey}`
      );
      return items;
    },
  });
};
