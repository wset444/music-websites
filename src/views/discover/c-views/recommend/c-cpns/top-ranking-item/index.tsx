import React, { ReactNode, memo } from 'react';
import { useApp } from '@/store';
import type, { FC } from 'react';
import AreaHeaderV1 from '@/components/area-header-v1';
import { RankingListWrapper } from './style';
import { fromatImg } from '@/utils/format';
interface IProps {
  children?: ReactNode;
  item: any;
}

const TopRankingItem: FC<IProps> = (props: IProps) => {
  const { item } = props;
  const { tracks = [] } = item;
  return (
    <RankingListWrapper>
      <div className="header">
        <div className="image">
          <img src={fromatImg(item.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name"> {item.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>

      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="list-item" key={item.id}>
              <div
                className="rank"
                style={{ color: index < 3 ? '#c10d0c' : '#000' }}
              >
                {index + 1}
              </div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="#/disscover/ranking">查看全部 &gt;</a>
      </div>
    </RankingListWrapper>
  );
};
export default memo(TopRankingItem);
