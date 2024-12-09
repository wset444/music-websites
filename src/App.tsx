import React, { Suspense } from 'react';
import { Link, useRoutes } from 'react-router-dom'; // 只需要导入 useRoutes
import routes from './router';

import { useApp, useAppDispath, shallowEqualApp } from './store';
import { changMessage } from './store/module/counter';
// import { FnReturnType } from './store';
// type GetFnType = typeof store.getState;
// type FnReturnType = ReturnType<GetFnType>;

function App() {
  // 在组件内部调用 useRoutes 来获取路由配置
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
    console.log(123);
    dispath(changMessage('fgggggggg'));
  };
  return (
    <div className="App">
      <div className="nav">
        {error}
        <h1>当前计数:{count}</h1>
        <p>{message}</p>
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
