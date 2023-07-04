import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { MdOutlineImportantDevices } from "react-icons/md";

import { ModalAddDevice } from "../ModalAddDevice/ModalAddDevice";
import { statusFilters } from "../../redux/filterEquipment/constants";
import {
  getDevices,
  getStatusFilter,
  getTypeFilter,
} from "../../redux/selectors";

const getVisibleDevice = (devices, statusFilter, type) => {
  let res = [];
  let finallyRes = [];

  switch (statusFilter) {
    case statusFilters.use:
      res = devices.filter((device) => device.status === statusFilter);
      if (type === "all") {
        return res;
      }
      finallyRes = res.filter((device) => device.type === type);
      return finallyRes;

    case statusFilters.stock:
      res = devices.filter((device) => device.status === statusFilter);
      if (type === "all") {
        return res;
      }
      finallyRes = res.filter((device) => device.type === type);
      return finallyRes;

    default:
      if (type === "all") {
        return devices;
      }
      finallyRes = devices.filter((device) => device.type === type);
      return finallyRes;
  }
};

export const EquipmentList = () => {
  const [choiceDevice, setChoiceDevice] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  function colorPick(status) {
    if (status === "use") {
      return "#ffe7e5";
    } else {
      return "#e7ffde";
    }
  }

  const clickHandler = (device) => {
    setChoiceDevice(device);
    onOpen();
  };

  const devices = useSelector(getDevices);
  const statusFilters = useSelector(getStatusFilter);
  const typeOfDevices = useSelector(getTypeFilter);
  const visibleDevice = getVisibleDevice(devices, statusFilters, typeOfDevices);

  return (
    <Box>
      <Flex flexWrap="wrap" px={8} gap="14px">
        {visibleDevice.length > 0 ? (
          visibleDevice.map((device) => {
            const { id, name, info, sn, type, location, employee, status } =
              device;
            return (
              <Flex
                key={id}
                flexDirection="column"
                justifyContent="space-around"
                w="32%"
                bg="white"
                p={3}
                borderRadius="12px"
                boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
                bgColor={colorPick(status)}
              >
                <Flex justifyContent="space-between">
                  <MdOutlineImportantDevices size={30} color="main" />

                  {status === "stock" ? (
                    <Button
                      onClick={() => {
                        clickHandler(device);
                      }}
                      variant="outline"
                      _hover={{ bg: "main", color: "white" }}
                    >
                      <AddIcon />
                    </Button>
                  ) : (
                    ""
                  )}
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontWeight="bold">{name}</Text>
                  <Text fontSize="sm" color="second">
                    {type}
                  </Text>
                </Flex>
                <Text fontSize="sm">{info}</Text>
                {status === "use" ? (
                  <Text>Employee: {employee}</Text>
                ) : (
                  <Text>Location: {location}</Text>
                )}
                <Text color="second">S/N: {sn}</Text>
              </Flex>
            );
          })
        ) : (
          <Text fontWeight="bold" color="second" fontSize="3xl">
            No matching result
          </Text>
        )}
      </Flex>
      <ModalAddDevice
        choiceDevice={choiceDevice}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
