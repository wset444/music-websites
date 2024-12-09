import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Songs: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div>Songs</div>
    </div>
  );
};
export default memo(Songs);
