import { Navigate } from "react-router-dom";
import {
  ROOT,
  HOME,
  LATEST_MUSIC,
  DISCOVERY,
  SONG_LIST,
  LEADER_BOARD,
  SINGERS,
  SEARCH,
  PLAY_LIST,
} from "@/constants/routers1";
import Home from "@/views/Home";
import LatestMusic from "@/views/LatestMusic";
import Discovery from "@/views/Discovery";
import Songlist from "@/views/Songlist";
import LeaderBoard from "@/views/LeaderBoard";
import Singers from "@/views/Singers";
import Search from "@/views/Search";
import PlayList from "@/views/PlayList";
export const routes = [
  {
    path: ROOT,
    element: <Navigate to={HOME} />,
  },
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: LATEST_MUSIC,
    element: <LatestMusic />,
  },
  {
    path: DISCOVERY,
    element: <Discovery />,
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
  {
    path: SEARCH,
    element: <Search />,
  },
  {
    path: `${PLAY_LIST}/:id`,
    element: <PlayList />,
  },
];
