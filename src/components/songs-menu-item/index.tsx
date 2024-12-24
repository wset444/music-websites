import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
  itemData?: any;
}
import { ThemeCoverWrapper } from './style';
import { fromatCount, fromatImg } from '@/utils/format';

const SongMenuItem: FC<IProps> = (props: IProps) => {
  const { children, itemData } = props;
  return (
    <div>
      <ThemeCoverWrapper>
        <div className="cover-top">
          <img
            className="images"
            src={fromatImg(itemData.picUrl, 140)}
            alt=""
          />
          <div className="cover sprite_covor">
            <div className="info sprite_covor">
              <span className="count">
                <i className="sprite_icon erji"></i>
                {fromatCount(itemData.playCount)}
              </span>
              <i className="sprite_icon play"></i>
            </div>
          </div>
        </div>
        <div className="cover-bottom">{itemData.name}</div>
      </ThemeCoverWrapper>
    </div>
  );
};
export default memo(SongMenuItem);
