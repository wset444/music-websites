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
      <div className="cover">
        <img src={fromatImg(arr.picUrl, 100)} alt="" />
      </div>
      <div className="info"></div>
      <div className="album-info">
        <div className="name">{arr.name}</div>
        <div className="artist">{arr.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
};
export default memo(NewalbumItem);
