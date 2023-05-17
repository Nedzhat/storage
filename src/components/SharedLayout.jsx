import { Outlet } from "react-router-dom";

import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Box } from "@chakra-ui/react";

export const SharedLayout = () => {
  return (
    <Box as="main" display="flex">
      <Header />
      <Outlet />
      <Sidebar />
    </Box>
  );
};
