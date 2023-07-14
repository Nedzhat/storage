import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Box } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { Login } from "./Login/Login";
import { Loader } from "./Loader/Loader";

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      {isLoggedIn ? (
        <Box as="main" display="flex">
          <Header />
          <Suspense
            fallback={
              <Box w="60%" bg="bgColor">
                <Loader />
              </Box>
            }
          >
            <Outlet />
          </Suspense>
          <Sidebar />
        </Box>
      ) : (
        <Login />
      )}
    </Box>
  );
};
