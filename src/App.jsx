import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";

import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/Home/Home.jsx"));
const ContactsPage = lazy(() => import("./pages/Contacts/Contacts.jsx"));
const RegisterPage = lazy(() => import("./pages/Registration/Registration.jsx"));
const LoginPage = lazy(() => import("./pages/Login/Login.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound.jsx"));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Loading...</b>
  ) : (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>
  );
};
export default App;
