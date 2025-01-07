import React, { ReactNode, memo } from 'react';
import { useApp } from '@/store';
import type, { FC } from 'react';
import AreaHeaderV1 from '@/components/area-header-v1';
import { RankingWraper } from './style';
import TopRankingItem from '../top-ranking-item/index';
interface IProps {
  children?: ReactNode;
}

const TopRanking: FC<IProps> = (props: IProps) => {
  const { rankings } = useApp((state) => ({
    rankings: state.recommend.rankings
  }));
  return (
    <RankingWraper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/toplist" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} item={item}></TopRankingItem>;
        })}
      </div>
    </RankingWraper>
  );
};
export default memo(TopRanking);
