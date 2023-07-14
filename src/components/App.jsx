import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";

import { refreshUser } from "../redux/user/operation";
import { fetchDevices } from "../redux/Equipment/operation";
import { fetchEmployees } from "../redux/Employees/operation";
import { Loader } from "./Loader/Loader";

const MyDevices = lazy(() => import("../pages/MyDevices/MyDevices"));
const Employees = lazy(() => import("../pages/Employees/Employees"));
const Equipment = lazy(() => import("../pages/Equipment/Equipment"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const Workplace = lazy(() => import("../pages/Workplace/Workplace"));
const Admin = lazy(() => import("../pages/Admin/Admin"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  const { isRefreshing, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    if (isLoggedIn) {
      dispatch(fetchDevices());
      dispatch(fetchEmployees());
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MyDevices />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workplace" element={<Workplace />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
