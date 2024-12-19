import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
import { RecommendWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = (props: IProps) => {
  return (
    <>
      <AreaHeaderV1></AreaHeaderV1>
      <RecommendWrapper>
        <div className="recommend-list">
          <div>left</div>
        </div>
      </RecommendWrapper>
    </>
  );
};
export default memo(HotRecommend);
