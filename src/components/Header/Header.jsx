import { Box } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <Box as="header">
      <Box as={Logo}></Box>
    </Box>
  );
};
