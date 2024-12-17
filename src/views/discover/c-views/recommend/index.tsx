import { useAppDispath } from '@/store';
import React, { ReactNode, memo, useEffect } from 'react';
import type, { FC } from 'react';
import { fetchBannerDataAction } from './store/recommend';
import TopBanner from './c-cpns/top-banner';
interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = (props: IProps) => {
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);
  return (
    <div>
      <TopBanner />
    </div>
  );
};
export default memo(Recommend);
