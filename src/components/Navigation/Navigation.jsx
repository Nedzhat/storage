import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import {
  AiOutlineFolderOpen,
  AiOutlineTeam,
  AiOutlineLaptop,
  AiOutlineFundProjectionScreen,
  AiOutlineInbox,
} from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { linkStyles, svgStyle } from "./Navigation.styled";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <Flex as="nav" flexDirection="column">
      <Box
        as={NavLink}
        sx={linkStyles}
        to={"/"}
        _activeLink={{ color: "white", bg: "main" }}
      >
        <AiOutlineFolderOpen style={svgStyle} />
        <Text fontWeight="bold">My devices</Text>
      </Box>
      <Box
        as={NavLink}
        sx={linkStyles}
        to={"/employees"}
        _activeLink={{ color: "white", bg: "main" }}
      >
        <AiOutlineTeam style={svgStyle} />
        <Text fontWeight="bold">Employees</Text>
      </Box>
      <Box
        as={NavLink}
        sx={linkStyles}
        to={"/equipment"}
        _activeLink={{ color: "white", bg: "main" }}
      >
        <AiOutlineLaptop style={svgStyle} />
        <Text fontWeight="bold">Equipment</Text>
      </Box>
      <Box
        as={NavLink}
        sx={linkStyles}
        to={"/projects"}
        _activeLink={{ color: "white", bg: "main" }}
      >
        <AiOutlineFundProjectionScreen style={svgStyle} />
        <Text fontWeight="bold">Projects</Text>
      </Box>
      <Box
        as={NavLink}
        sx={linkStyles}
        to={"/workplace"}
        _activeLink={{ color: "white", bg: "main" }}
      >
        <AiOutlineInbox style={svgStyle} />
        <Text fontWeight="bold">Workplace</Text>
      </Box>
      <Box
        as={NavLink}
        sx={linkStyles}
        to={"/admin"}
        _activeLink={{ color: "white", bg: "main" }}
      >
        <MdOutlineAdminPanelSettings style={svgStyle} />
        <Text fontWeight="bold">Admin</Text>
      </Box>
      <Divider mt={5} borderColor="main" borderBottomWidth="2px" />
    </Flex>
  );
};
