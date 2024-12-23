import React, { ReactNode, memo } from 'react';
import type, { FC, useRef } from 'react';
import { RecommendWrapper } from './style';
import { useApp } from '@/store';

import AreaHeaderV1 from '@/components/area-header-v1';
interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = (props: IProps) => {
  const commendsRef: any = useRef();
  const { hotRecommends } = useApp((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }));
  return (
    <>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚']}
        moreLink="/discover/songs"
      />
      <RecommendWrapper>
        <div className="recommend-list">
          <div>
            {hotRecommends.map((item: any) => {
              return <div key={item.id}>{item.name} </div>;
            })}
          </div>
        </div>
      </RecommendWrapper>
    </>
  );
};
export default memo(HotRecommend);
