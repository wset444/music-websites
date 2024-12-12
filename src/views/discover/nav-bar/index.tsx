import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { DiscoverWrapper, TopMenu } from './style';
import { dicoverMenu } from '@/assets/data/local-data';
interface IProps {
  children?: ReactNode;
}

const NavBar: FC<IProps> = (props: IProps) => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu>
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
    </DiscoverWrapper>
  );
};
export default memo(NavBar);
