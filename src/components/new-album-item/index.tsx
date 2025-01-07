import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
import { AlbumWrapper } from './style';
import { fromatImg } from '@/utils/format';
interface IProps {
  children?: ReactNode;
  arr?: any;
}

const NewalbumItem: FC<IProps> = (props: IProps) => {
  const { arr } = props;
  return (
    <AlbumWrapper>
      <div className="top">
        <img src={fromatImg(arr.picUrl, 100)} alt="" />
        <a href="/abc" className="cover sprite_covor">
          {arr.name}
        </a>
      </div>

      <div className="bottom">
        <div className="name">{arr.name}</div>
        <div className="artist">{arr.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
};
export default memo(NewalbumItem);
