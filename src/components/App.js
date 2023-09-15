import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import Layout from 'layout/Layout';
import { RestrictedRoute } from 'guards/RestrictedRoute';
import { PrivateRoute } from 'guards/PrivateRoute';
import useAuth from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage.js'));
const RegisterPage = lazy(() => import('../pages/RegisterPage.js'));
const LoginPage = lazy(() => import('../pages/LoginPage.js'));
const ContactsPage = lazy(() => import('../pages/ContacsPage.js'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPages.js'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    )
  );
};

export default App;