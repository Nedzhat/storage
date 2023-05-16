import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import MyDevices from "../../../MyDevices.json";
import {
  MdOutlineImportantDevices,
  MdOutlineSummarize,
  MdOutlineDeleteForever,
} from "react-icons/md";

export const ActiveDevices = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" p={8}>
        <Heading size="lg">My Equipment</Heading>
        <Button
          leftIcon={<AddIcon />}
          variant="outline"
          _hover={{ bg: "main", color: "white" }}
        >
          Register
        </Button>
      </Flex>
      <Flex flexWrap="wrap" px={8} gap="15px">
        {MyDevices.map(({ id, name, info, sn }, idx) => {
          return (
            <Flex
              key={idx}
              flexDirection="column"
              justifyContent="space-around"
              w="32%"
              bg="white"
              p={3}
              borderRadius="12px"
            >
              <Flex justifyContent="space-between">
                <MdOutlineImportantDevices size={30} color="main" />
                <IconButton
                  variant="outline"
                  colorScheme="#323b4b"
                  aria-label="Delete"
                  size="sm"
                  icon={<MdOutlineDeleteForever />}
                  _hover={{ bg: "main", color: "white" }}
                />
              </Flex>
              <Text fontWeight="bold">{name}</Text>
              <Text fontSize="sm">{info}</Text>
              <Text color="second">S/N: {sn}</Text>
            </Flex>
          );
        })}
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          w="32%"
          bg="white"
          p={3}
          borderRadius="12px"
        >
          <MdOutlineSummarize size={30} color="main" />
          <Text fontWeight="bold">Empty</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
