import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineImportantDevices } from "react-icons/md";
import devices from "../../../MyDevices.json";

const type = devices.reduce((allType, device) => {
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
const res = Object.entries(typeCount);

export const Sidebar = () => {
  return (
    <Box p={8} w="20%">
      <Flex gap="10px" justifyContent="center">
        <AiOutlineUser size="25px" />
        <Text fontWeight="bold" fontSize="20px">
          Name Surname
        </Text>
      </Flex>
      <Button
        w="100%"
        rightIcon={<HiOutlineLogout />}
        variant="outline"
        _hover={{ bg: "main", color: "white" }}
      >
        Log Out
      </Button>
      <Box mt={8}>
        <Heading fontSize="md">Your Devices</Heading>
        <Divider mt={5} mb={2} borderColor="main" borderBottomWidth="2px" />
        <Flex gap="10px" flexDirection="column">
          {res.map((device, idx) => {
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
  );
};
