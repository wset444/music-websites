import React from 'react';
import { useRoutes } from 'react-router-dom'; // 只需要导入 useRoutes
import routes from './router';

function App() {
  // 在组件内部调用 useRoutes 来获取路由配置
  const routing = useRoutes(routes);

  return <div className="App">{routing}</div>;
}

export default App;
