import axios from "helpers/axios";
import { IGetAlbumResponse } from "./types/album";

type GetAlbumFn = (id: number) => Promise<IGetAlbumResponse>;

const getAlbum: GetAlbumFn = async (id) => {
  const response = await axios({
    url: "/album",
    params: {
      id,
    },
  });

  return response;
};

const getNewAlbums = async (params: any) => {
  const response = await axios({
    url: "/album/new",
    params,
  });
  return response.albums;
};

export default {
  getAlbum,
  getNewAlbums,
};
