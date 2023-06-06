import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout";

const MyDevices = lazy(() => import("../pages/MyDevices/MyDevices"));
const Login = lazy(() => import("../pages/Login/Login"));
const People = lazy(() => import("../pages/People/People"));
const Equipment = lazy(() => import("../pages/Equipment/Equipment"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const Workplace = lazy(() => import("../pages/Workplace/Workplace"));
const Admin = lazy(() => import("../pages/Admin/Admin"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MyDevices />} />
        <Route path="/login" element={<Login />} />
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
