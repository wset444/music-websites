import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
const Discover = React.lazy(() => import('@/views/discover'));
const Mine = React.lazy(() => import('@/views/mine'));
const Download = React.lazy(() => import('@/views/download'));
const Focus = React.lazy(() => import('@/views/focus'));
const Recommend = React.lazy(
  () => import('@/views/discover/c-views/recommend')
);
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'));
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'));
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'));
const Artist = React.lazy(() => import('@/views/discover/c-views/artist'));
const Album = React.lazy(() => import('@/views/discover/c-views/album'));
const routes: RouteObject[] = [
  {
    path: '/', // 首页路径
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover', // 首页路径
    element: <Discover />,
    children: [
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine', // 修改为 /demos 路径，避免与首页路径冲突
    element: <Mine />
  },
  {
    path: '/focus', // 修改为 /demos 路径，避免与首页路径冲突
    element: <Focus />
  },
  {
    path: '/download', // 修改为 /demos 路径，避免与首页路径冲突
    element: <Download />
  }
];

export default routes;
