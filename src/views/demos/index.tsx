import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const index: FC<IProps> = () => {
  return (
    <div>
      <div>template</div>
    </div>
  );
};
export default memo(index);
