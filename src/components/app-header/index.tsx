import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
import { Link } from 'react-router-dom'; // 只需要导入 useRoutes
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style';

import { headerLinks } from '@/assets/data/local-data';

interface IProps {
  children?: ReactNode;
}

const Haeder: FC<IProps> = (props: IProps) => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return <Link to={item.link}>{item.title}</Link>;
    } else if (item.type === 'link') {
      return (
        <a href={item.link} rel="noopener noreferrer" target="_blank">
          {item.title}
        </a>
      );
    }
  }
  return (
    <AppHeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item) => {
              return (
                <div className="select-item" key={item.link}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>111111111111</HeaderRight>
      </div>
    </AppHeaderWrapper>
  );
};
export default memo(Haeder);
