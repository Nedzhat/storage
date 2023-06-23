import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";

import { refreshUser } from "../redux/user/operation";

const MyDevices = lazy(() => import("../pages/MyDevices/MyDevices"));
const People = lazy(() => import("../pages/People/People"));
const Equipment = lazy(() => import("../pages/Equipment/Equipment"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const Workplace = lazy(() => import("../pages/Workplace/Workplace"));
const Admin = lazy(() => import("../pages/Admin/Admin"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MyDevices />} />
        <Route path="/people" element={<People />} />
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
