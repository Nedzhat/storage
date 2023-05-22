import { Button, Flex, Text } from "@chakra-ui/react";
import allDevices from "../../../allDevices.json";
import { AddIcon } from "@chakra-ui/icons";

export const EquipmentList = () => {
  function colorPick(status) {
    if (status === "use") {
      return "#ffe7e5";
    } else {
      return "#e7ffde";
    }
  }

  return (
    <Flex flexWrap="wrap" justifyContent="space-between" gap="20px 0">
      {allDevices.map(({ id, name, info, sn, type, location, status }) => {
        return (
          <Flex
            key={id}
            flexDirection="column"
            w="30%"
            bg="white"
            p={3}
            borderRadius="12px"
            bgColor={colorPick(status)}
            boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
          >
            <Flex justifyContent="space-between">
              <Text fontSize="2xl" fontWeight="bold">
                {name}
              </Text>
              {status === "stock" ? (
                <Button
                  variant="outline"
                  _hover={{ bg: "main", color: "white" }}
                >
                  <AddIcon />
                </Button>
              ) : (
                ""
              )}
            </Flex>
            <Text fontSize="sm" color="second">
              {sn}
            </Text>
            <Text fontSize="sm">{info}</Text>
            <Flex h="100%" justifyContent="space-between" alignItems="flex-end">
              <Text fontSize="sm" textTransform="uppercase">
                {type}
              </Text>
              <Text fontSize="sm">{location}</Text>
              <Text fontSize="sm">{status}</Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
