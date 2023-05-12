import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import {
  AiOutlineFolderOpen,
  AiOutlineUsergroupDelete,
  AiOutlineLaptop,
  AiOutlineFundProjectionScreen,
  AiOutlineInbox,
  AiOutlineDeliveredProcedure,
} from "react-icons/ai";
import { linkStyles, svgStyle } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Flex as="nav" flexDirection="column">
      <Box as="a" sx={linkStyles} href="#">
        <AiOutlineFolderOpen style={svgStyle} />
        <Text fontWeight="bold">My devices</Text>
      </Box>
      <Box as="a" sx={linkStyles} href="#">
        <AiOutlineUsergroupDelete style={svgStyle} />
        <Text fontWeight="bold">People</Text>
      </Box>
      <Box as="a" sx={linkStyles} href="#">
        <AiOutlineLaptop style={svgStyle} />
        <Text fontWeight="bold">Equipment</Text>
      </Box>
      <Box as="a" sx={linkStyles} href="#">
        <AiOutlineFundProjectionScreen style={svgStyle} />
        <Text fontWeight="bold">Projects</Text>
      </Box>
      <Box as="a" sx={linkStyles} href="#">
        <AiOutlineInbox style={svgStyle} />
        <Text fontWeight="bold">Workplace</Text>
      </Box>
      <Box as="a" sx={linkStyles} href="#">
        <AiOutlineDeliveredProcedure style={svgStyle} />
        <Text fontWeight="bold">Delivery</Text>
      </Box>
      <Divider mt={5} borderColor="main" borderBottomWidth="2px" />
    </Flex>
  );
};
