import React, { ReactNode, memo, useRef, ElementRef } from 'react';
import type, { FC } from 'react';
import { AlbumWrapper } from './style';
import { Carousel } from 'antd';
import AreaHeaderV1 from '@/components/area-header-v1';
interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = (props: IProps) => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  const onBack = () => {
    bannerRef.current?.prev();
  };
  const onNext = () => {
    bannerRef.current?.next();
  };
  return (
    <AlbumWrapper>
      <AreaHeaderV1
        title="新碟上架"
        keywords={['华语', '流行', '摇滚']}
        moreLink="/discover/album"
      />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={onBack}
        ></button>
        <div className="album">
          <Carousel dots={false} speed={1500} ref={bannerRef}>
            {[1, 2].map((item) => {
              return <h1 key={item}>{item}</h1>;
            })}
          </Carousel>
        </div>

        <button
          className="arrow arrow-right sprite_02"
          onClick={onNext}
        ></button>
      </div>
    </AlbumWrapper>
  );
};
export default memo(NewAlbum);
