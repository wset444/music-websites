import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
import { Link } from 'react-router-dom'; // 只需要导入 useRoutes
import { AppHeaderWrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const AreaHeaderV1: FC<IProps> = (props: IProps) => {
  return (
    <AppHeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">热门推荐</h3>
        <div className="keyword">
          {['华语', '流行', '摇滚'].map((item) => {
            return (
              <div className="item" key={item}>
                <span className="text">{item}</span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="">更多</a>
        <i className="  sprite_02 icon"></i>
      </div>
    </AppHeaderWrapper>
  );
};
export default memo(AreaHeaderV1);
