import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Ranking: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div>Ranking</div>
    </div>
  );
};
export default memo(Ranking);
