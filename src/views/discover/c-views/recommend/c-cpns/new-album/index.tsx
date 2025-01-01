import React, { ReactNode, memo, useRef, ElementRef } from 'react';
import type, { FC } from 'react';
import { AlbumWrapper } from './style';
import { Carousel } from 'antd';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useApp } from '@/store';
import NewalbumItem from '@/components/new-album-item';

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = (props: IProps) => {
  const { newAlbum } = useApp((state) => ({
    newAlbum: state.recommend.newAlbum
  }));
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
            {[0, 1].map((item) => {
              return (
                <div className="album-list" key={item}>
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((item) => {
                    return (
                      <NewalbumItem key={item.id} arr={item}></NewalbumItem>
                    );
                  })}
                </div>
              );
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
