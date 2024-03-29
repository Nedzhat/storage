import { useState } from "react";
import { useSelector } from "react-redux";

import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { MdOutlineImportantDevices } from "react-icons/md";

import { ModalAddDevice } from "../ModalAddDevice/ModalAddDevice";

import { getVisibleDevice } from "../../redux/selectors";
import "./equipmentList.css";

export const EquipmentList = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function colorPick(status) {
    if (status === "use") {
      return "#ffe7e5";
    } else {
      return "#e7ffde";
    }
  }

  const clickHandler = (device) => {
    setSelectedDevice(device);
    onOpen();
  };

  const visibleDevice = useSelector(getVisibleDevice);

  return (
    <Box>
      <Flex flexWrap="wrap" px={8} gap="2%">
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
                className="child-element"
              >
                <Flex justifyContent="space-between">
                  <MdOutlineImportantDevices size={30} color="main" />

                  {status === "stock" && (
                    <Button
                      onClick={() => {
                        clickHandler(device);
                      }}
                      variant="outline"
                      _hover={{ bg: "main", color: "white" }}
                    >
                      <AddIcon />
                    </Button>
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
                  <Box>
                    <Text>Employee: {employee}</Text>
                    <Text>Location: {location}</Text>
                  </Box>
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
        selectedDevice={selectedDevice}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
