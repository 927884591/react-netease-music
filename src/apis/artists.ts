import axios from "helpers/axios";

const topListOfArtists = async (type: number | null) => {
  const params: any = {};
  if (type) {
    params.type = type;
  }
  return await axios({
    url: "/toplist/artist",
  });
};
export default {
  topListOfArtists,
};
