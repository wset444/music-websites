import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
interface IProps {
  children?: ReactNode;
}

const Djradio: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div>Djradio</div>
    </div>
  );
};
export default memo(Djradio);
