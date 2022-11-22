import { Navigate } from "react-router-dom";
import {
  ROOT,
  RECOMMENDATION,
  LATEST_MUSIC,
  RECOMMEND_DAILY,
  SONG_LIST,
  LEADER_BOARD,
  SINGERS,
} from "@/constants/routers1";
import Recommendation from "@/views/Recommendation";
import LatestMusic from "@/views/LatestMusic";
import RecommendDaily from "@/views/RecommendDaily";
import Songlist from "@/views/Songlist";
import LeaderBoard from "@/views/LeaderBoard";
import Singers from "@/views/Singers";
export const routes = [
  {
    path: ROOT,
    element: <Navigate to={RECOMMENDATION} />,
  },
  {
    path: RECOMMENDATION,
    element: <Recommendation />,
  },
  {
    path: LATEST_MUSIC,
    element: <LatestMusic />,
  },
  {
    path: RECOMMEND_DAILY,
    element: <RecommendDaily />,
  },
  {
    path: SONG_LIST,
    element: <Songlist />,
  },
  {
    path: LEADER_BOARD,
    element: <LeaderBoard />,
  },
  {
    path: SINGERS,
    element: <Singers />,
  },
];
