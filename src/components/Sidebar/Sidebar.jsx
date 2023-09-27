import { useDispatch, useSelector } from "react-redux";
import {
  getDevices,
  getUser,
  getUserDevices,
  getWorkplaceEmployee,
} from "../../redux/selectors";
import { logOut } from "../../redux/user/operation";

import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import { AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineImportantDevices } from "react-icons/md";
import { BsPinMap } from "react-icons/bs";
import { NewRemoteWorkplace } from "../NewRemoteWorkplace/NewRemoteWorkplace";

export const Sidebar = () => {
  const user = useSelector(getUser);
  const devices = useSelector(getDevices);
  const equipment = getUserDevices(devices, user.email);
  const workplaces = useSelector(getWorkplaceEmployee);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const type = equipment.reduce((allType, device) => {
    allType.push(device.type);
    return allType;
  }, []);

  const getType = (acc, type) => {
    if (!acc.hasOwnProperty(type)) {
      acc[type] = 0;
    }
    acc[type] += 1;
    return acc;
  };

  const countType = (type) => type.reduce(getType, {});
  const typeCount = countType(type);
  const resTypesDevices = Object.entries(typeCount);

  return (
    <Box p={8} w="20%">
      <Flex gap="10px" justifyContent="center">
        <AiOutlineUser size="25px" />
        <Text fontWeight="bold" fontSize="20px">
          {user.name ? user.name : "Username"}
        </Text>
      </Flex>
      <Text fontWeight="bold" fontSize="20px" textAlign="center" color="second">
        {user.position && user.position}
      </Text>
      <Button
        onClick={handleLogOut}
        w="100%"
        rightIcon={<HiOutlineLogout />}
        variant="outline"
        _hover={{ bg: "main", color: "white" }}
      >
        Log Out
      </Button>
      <Box mt={8}>
        {user.projects ? (
          <Heading fontSize="md">Your Projects</Heading>
        ) : (
          <Heading fontSize="md" color="second">
            You haven't any project!
          </Heading>
        )}
        <Divider mt={5} mb={2} borderColor="main" borderBottomWidth="2px" />
        <Flex gap="10px" flexDirection="column">
          {user.projects && (
            <Flex
              p={4}
              gap="10px"
              alignItems="center"
              border="1px solid #989ca4"
              borderRadius="8px"
            >
              <AiOutlineFundProjectionScreen size="30px" />
              <Box>
                <Text fontSize="xl">{user.projects}</Text>
              </Box>
            </Flex>
          )}
        </Flex>
        <Box mt={8}>
          {workplaces.length > 0 ? (
            <Heading fontSize="md">Your Workplaces</Heading>
          ) : (
            <Heading fontSize="md" color="second">
              You have to choose workplace!
            </Heading>
          )}
          <Divider mt={5} mb={2} borderColor="main" borderBottomWidth="2px" />
          <Flex gap="10px" flexDirection="column">
            {workplaces.length > 0 &&
              workplaces.map((wp, idx) => {
                return (
                  <Flex
                    key={idx}
                    p={4}
                    gap="10px"
                    alignItems="center"
                    border="1px solid #989ca4"
                    borderRadius="8px"
                  >
                    <BsPinMap size="30px" />
                    <Box>
                      <Text fontSize="xl">
                        {wp.city
                          ? "Remote - " + wp.country + ", " + wp.city
                          : "Head office - " + wp.name}
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
            <NewRemoteWorkplace />
          </Flex>
        </Box>
        <Box mt={8}>
          {resTypesDevices.length > 0 ? (
            <Heading fontSize="md">Your Devices</Heading>
          ) : (
            <Heading fontSize="md" color="second">
              You haven't any device!
            </Heading>
          )}
          <Divider mt={5} mb={2} borderColor="main" borderBottomWidth="2px" />
          <Flex gap="10px" flexDirection="column">
            {resTypesDevices.length > 0 &&
              resTypesDevices.map((device, idx) => {
                return (
                  <Flex
                    key={idx}
                    p={4}
                    gap="10px"
                    alignItems="center"
                    border="1px solid #989ca4"
                    borderRadius="8px"
                  >
                    <MdOutlineImportantDevices size="25px" />
                    <Box>
                      <Text>{device[0]}</Text>
                      <Text color="second">{device[1]}</Text>
                    </Box>
                  </Flex>
                );
              })}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
