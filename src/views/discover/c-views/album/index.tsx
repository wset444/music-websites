import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Album: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div>album</div>
    </div>
  );
};
export default memo(Album);
