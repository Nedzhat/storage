import { Outlet } from "react-router-dom";

import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Box } from "@chakra-ui/react";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <Box as="main" display="flex">
      <Header />
      <Suspense
        fallback={
          <Box w="60%" bg="bgColor">
            Loading...
          </Box>
        }
      >
        <Outlet />
      </Suspense>
      <Sidebar />
    </Box>
  );
};
