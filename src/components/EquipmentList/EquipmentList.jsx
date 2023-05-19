import {
  Button,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import employees from "../../../employees.json";
import MyDevices from "../../../MyDevices.json";
import allDevices from "../../../allDevices.json";

export const EquipmentList = () => {
  const filterDevices = (devices) => {
    // console.log(employees);
    // console.log(MyDevices);

    const r = devices.find((dev) => dev.id === employees[0].devices[1]);
    // console.log(r);
    return r;
  };

  const res = filterDevices(MyDevices);
  //   console.log(res);

  return (
    <Flex flexWrap="wrap" mt={8} justifyContent="space-between" gap="20px 0">
      {allDevices.map(({ id, name, info, sn, type, location, status }) => {
        return (
          <Flex
            key={id}
            flexDirection="column"
            w="30%"
            bg="white"
            p={3}
            borderRadius="12px"
            boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
          >
            <Text fontSize="2xl" fontWeight="bold">
              {name}
            </Text>
            <Text fontSize="sm" color="second">
              {sn}
            </Text>
            <Text fontSize="sm">{info}</Text>
            <Text fontSize="sm">{type}</Text>
            <Text fontSize="sm">{location}</Text>
            <Text fontSize="sm">{status}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
