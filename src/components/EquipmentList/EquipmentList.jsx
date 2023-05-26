import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import allDevices from "../../../allDevices.json";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { MdOutlineImportantDevices } from "react-icons/md";
import { ModalAddDevice } from "../ModalAddDevice/ModalAddDevice";

export const EquipmentList = () => {
  const [idDevices, setIdDevices] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  return (
    <Flex flexWrap="wrap" justifyContent="space-between" px={8} gap="15px 0">
      <ModalAddDevice idDevices={idDevices} isOpen={isOpen} onClose={onClose} />
      {allDevices.map(
        ({ id, name, info, sn, type, location, employee, status }) => {
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
  );
};

{
  /* <Flex flexWrap="wrap" justifyContent="space-between" gap="20px 0">
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
    </Flex> */
}
