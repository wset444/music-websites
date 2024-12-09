import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  return (
    <div>
      <div>download</div>
    </div>
  );
};
export default memo(Home);
