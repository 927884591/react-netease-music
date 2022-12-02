import axios from "helpers/axios";

import { localStorageFactory } from "@/helpers/localStorage";

const SESSION = "__session";

export const useInfo = localStorageFactory({ key: SESSION, defaultValue: "" });

const getLikeList = async (uid: any) => {
  const reponse = await axios({
    url: "/likelist",
    params: {
      uid: uid,
      timestamp: new Date().getTime(),
    },
  });
  return reponse;
};

export default {
  getLikeList,
};
