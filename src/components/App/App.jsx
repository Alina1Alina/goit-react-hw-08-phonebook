import { Container } from './AppStyled';
import Navigation from 'components/Navigation/Navigation'
import Loader from 'components/Loader/Loader';
import { fetchCurrentUser } from 'Redux/auth/auth-operations';
import { selectorIsRefreshing } from 'Redux/auth/auth-selectors';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense  } from 'react';

const Home = lazy(() => import('components/Pages/Home'));
const Register = lazy(() => import('components/Pages/Register'));
const Login = lazy(() => import('components/Pages/Login'));
const Contacts = lazy(() => import('components/Pages/Contacts'));

export const App = () => {
  const isRefreshing = useSelector(selectorIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Container>
    )
  );
};

export default App;
