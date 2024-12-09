import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div>Recommend</div>
    </div>
  );
};
export default memo(Recommend);
