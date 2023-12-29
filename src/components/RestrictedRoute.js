import { Navigate } from 'react-router-dom';
import { selectIsLoggenIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};