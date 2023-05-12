import { Box } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { headerStyle } from "./Header.styled";

export const Header = () => {
  return (
    <Box as="header" sx={headerStyle}>
      <Logo />
      <Navigation />
    </Box>
  );
};
