import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from '@/views/home';
import Demos from '@/views/test/index';

const routes: RouteObject[] = [
  {
    path: '/', // 首页路径
    element: <Home />
  },
  {
    path: '/demos', // 修改为 /demos 路径，避免与首页路径冲突
    element: <Demos />
  }
];

export default routes;
