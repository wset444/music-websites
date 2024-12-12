import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
import { Input } from 'antd';
import { NavLink } from 'react-router-dom'; // 只需要导入 useRoutes
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style';

import { headerLinks } from '@/assets/data/local-data';
import { SearchOutlined } from '@ant-design/icons';

interface IProps {
  children?: ReactNode;
}

const Haeder: FC<IProps> = (props: IProps) => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined;
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
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
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  );
};
export default memo(Haeder);
