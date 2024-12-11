import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
import { Link } from 'react-router-dom'; // 只需要导入 useRoutes
interface IProps {
  children?: ReactNode;
}

const Haeder: FC<IProps> = (props: IProps) => {
  return (
    <div className="nav">
      <Link to="/discover">发现音乐</Link>
      <Link to="/mine">我的音乐</Link>
      <Link to="/focus">关注</Link>
      <Link to="/download">下载客户端</Link>
    </div>
  );
};
export default memo(Haeder);
