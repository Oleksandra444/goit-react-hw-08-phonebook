import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { LowerLayout } from './Layout.styled';

export const Layout = () => {
  const location = useLocation();
  const { pathname } = location;
  const contactsPage = pathname.includes('/contacts');

  return (
    <LowerLayout iscontactspage={contactsPage.toString()}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LowerLayout>
  );
};