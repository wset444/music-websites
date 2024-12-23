import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
import { Link } from 'react-router-dom'; // 只需要导入 useRoutes
import { AppHeaderWrapper } from './style';

interface IProps {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}

const AreaHeaderV1: FC<IProps> = (props: IProps) => {
  const {
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  } = props;
  return (
    <AppHeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
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
        <Link to={moreLink}>{moreText}</Link>
        <i className="sprite_02 icon"></i>
      </div>
    </AppHeaderWrapper>
  );
};
export default memo(AreaHeaderV1);
