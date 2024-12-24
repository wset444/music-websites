import React, { ReactNode, memo } from 'react';
import type, { FC, useRef } from 'react';
import { RecommendWrapper } from './style';
import { useApp } from '@/store';
import SongMenuItem from '@/components/songs-menu-item';

import AreaHeaderV1 from '@/components/area-header-v1';
import Item from 'antd/es/list/Item';
interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = (props: IProps) => {
  const commendsRef: any = useRef();
  const { hotRecommends } = useApp((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }));
  console.log(hotRecommends);
  return (
    <>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚']}
        moreLink="/discover/songs"
      />
      <RecommendWrapper>
        <div className="recommend-list">
          {hotRecommends.map((item: any) => {
            return (
              <SongMenuItem key={item.id} itemData={item}>
                {' '}
              </SongMenuItem>
            );
          })}
        </div>
      </RecommendWrapper>
      <AreaHeaderV1
        title="新碟上架"
        keywords={['华语', '流行', '摇滚']}
        moreLink="/discover/songs"
      />
      <RecommendWrapper>
        <div className="recommend-list">
          {hotRecommends.map((item: any) => {
            return (
              <SongMenuItem key={item.id} itemData={item}>
                {' '}
              </SongMenuItem>
            );
          })}
        </div>
      </RecommendWrapper>
    </>
  );
};
export default memo(HotRecommend);
