import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Footer: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  );
};
export default memo(Footer);
