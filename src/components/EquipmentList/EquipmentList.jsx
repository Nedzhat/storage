import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { MdOutlineImportantDevices } from "react-icons/md";

import { ModalAddDevice } from "../ModalAddDevice/ModalAddDevice";
import { statusFilters } from "../../redux/filterEquipment/constants";
import { getDevices, getStatusFilter } from "../../redux/selectors";

const getVisibleDevice = (devices, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.use:
      return devices.filter((device) => device.status === statusFilter);
    case statusFilters.stock:
      return devices.filter((device) => device.status === statusFilter);
    default:
      return devices;
  }
};

const getTypeDevices = (devices) => {
  const arrType = [];
  devices.map((device) => arrType.push(device.type));
  return [...new Set(arrType)];
};

export const EquipmentList = () => {
  const [idDevices, setIdDevices] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  function colorPick(status) {
    if (status === "use") {
      return "#ffe7e5";
    } else {
      return "#e7ffde";
    }
  }

  const clickHandler = (id) => {
    setIdDevices(id);
    onOpen();
  };

  const devices = useSelector(getDevices);
  const statusFilters = useSelector(getStatusFilter);
  const visibleDevice = getVisibleDevice(devices, statusFilters);
  const typeOfDevices = getTypeDevices(devices);

  return (
    <Box>
      <Flex flexWrap="wrap" px={8} gap="14px">
        {visibleDevice.map(
          ({ id, name, info, sn, type, location, employee, status }) => {
            return (
              <Flex
                key={name}
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
                        clickHandler(id);
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
          }
        )}
      </Flex>
      <ModalAddDevice idDevices={idDevices} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
