import { useAppDispath } from '@/store';
import React, { ReactNode, memo, useEffect } from 'react';
import type, { FC } from 'react';
import { fetchBannerDataAction } from './store/recommend';
interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = (props: IProps) => {
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    console.log(123);
  }, []);
  return (
    <div>
      <div>Recommend</div>
    </div>
  );
};
export default memo(Recommend);
