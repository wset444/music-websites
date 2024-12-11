import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Footer: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div>Footer</div>
    </div>
  );
};
export default memo(Footer);
