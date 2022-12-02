import axios from "helpers/axios";

const getPlayList = async (id: number) => {
  const reponse = await axios({
    url: "/playlist/detail",
    params: {
      id,
      timestamp: new Date().getTime(),
    },
  });
  return reponse;
};
const getTopList = async () => {
  return await axios({
    url: "/toplist",
  });
};

export default {
  getPlayList,
  getTopList,
};
