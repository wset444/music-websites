import React, { ReactNode, memo, Suspense } from 'react';
import type, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from './nav-bar';
interface IProps {
  children?: ReactNode;
}

const discover: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="">
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
};
export default memo(discover);
