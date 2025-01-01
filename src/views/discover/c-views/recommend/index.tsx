import { useAppDispath } from '@/store';
import React, { ReactNode, memo, useEffect } from 'react';
import type, { FC } from 'react';
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction
} from './store/recommend';
import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import { RecommendLeft, RecommendRight, Content } from './style';
interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = (props: IProps) => {
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetchHotRecommendAction());
    dispatch(fetchNewAlbumAction());
  }, []);
  return (
    <div>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
        </RecommendLeft>
        <RecommendRight>right</RecommendRight>
      </Content>
    </div>
  );
};
export default memo(Recommend);
