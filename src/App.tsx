import React, { Suspense, useEffect, useState } from 'react';
import { Link, useRoutes } from 'react-router-dom'; // 只需要导入 useRoutes
import routes from './router';
import { useApp, useAppDispath, shallowEqualApp } from './store';
import { changMessage } from './store/module/counter';
import { getMVlists } from '@/service/request/index';
import Haeder from '@/components/app-header/index';
import Footer from '@/components/app-footer/index';
interface BannerItem {
  artistName: string;
  // 你可以在这里添加更多字段
}

function App() {
  // 在组件内部调用 useRoutes 来获取路由配置
  const [bannerList, setBanners] = useState<BannerItem[]>([]);
  useEffect(() => {
    getMVlists()
      .then((result: any) => {
        console.log(result);
        setBanners(result.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  const routing = useRoutes(routes);
  return (
    <div className="App">
      <Haeder />

      <Suspense fallback="">
        <div className="mian"> {routing}</div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
