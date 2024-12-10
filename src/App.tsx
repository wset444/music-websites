import React, { Suspense, useEffect, useState } from 'react';
import { Link, useRoutes } from 'react-router-dom'; // 只需要导入 useRoutes
import routes from './router';

import { useApp, useAppDispath, shallowEqualApp } from './store';
import { changMessage } from './store/module/counter';
import { getMVlists } from '@/service/request/index';
// import { FnReturnType } from './store';
// type GetFnType = typeof store.getState;
// type FnReturnType = ReturnType<GetFnType>;
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
  const { count, message } = useApp(
    (state: any) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  );
  const { error } = useApp(
    (state: any) => ({
      error: state.allres.error
    }),
    shallowEqualApp
  );
  const dispath = useAppDispath();
  const handCangeMessgae = () => {
    dispath(changMessage('fgggggggg'));
  };
  const getMvList = () => {
    console.log(123);
  };
  return (
    <div className="App">
      <div className="nav">
        {bannerList.map((item, index) => {
          return <div key={index}>{item.artistName}</div>;
        })}
        <button onClick={getMvList}>发送请求</button>
        <button onClick={handCangeMessgae}>changMessage</button>
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="">
        <div className="mian"> {routing}</div>
      </Suspense>
    </div>
  );
}

export default App;
