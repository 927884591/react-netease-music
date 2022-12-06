import { Navigate } from "react-router-dom";
import { lazy } from "react";
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
  DAILY,
} from "@/constants/routers1";
import Home from "@/views/Home";

// import LatestMusic from "@/views/LatestMusic";
// import Discovery from "@/views/Discovery";
// import Songlist from "@/views/Songlist";
// import LeaderBoard from "@/views/LeaderBoard";
// import Singers from "@/views/Singers";
// import Search from "@/views/Search";
// import PlayList from "@/views/PlayList";
// import Daily from "@/views/Daily";

const LatestMusic = lazy(() => import("@/views/LatestMusic"));
const Discovery = lazy(() => import("@/views/Discovery"));
const Songlist = lazy(() => import("@/views/Songlist"));
const LeaderBoard = lazy(() => import("@/views/LeaderBoard"));
const Singers = lazy(() => import("@/views/Singers"));
const Search = lazy(() => import("@/views/Search"));
const PlayList = lazy(() => import("@/views/PlayList"));
const Daily = lazy(() => import("@/views/Daily"));

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
  {
    path: DAILY,
    element: <Daily />,
  },
];
