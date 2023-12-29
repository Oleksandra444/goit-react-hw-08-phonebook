import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { LowerLayout } from './Layout.styled';

export const Layout = () => {
  return (
    <LowerLayout>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LowerLayout>
  );
};