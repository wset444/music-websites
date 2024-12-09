import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Artist: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div>Artist</div>
    </div>
  );
};
export default memo(Artist);
