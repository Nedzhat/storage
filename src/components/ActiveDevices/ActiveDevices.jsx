import { useState } from "react";
import { useSelector } from "react-redux";

import { getUser } from "../../redux/selectors";

import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdOutlineImportantDevices,
  MdOutlineSummarize,
  MdOutlineDeleteForever,
} from "react-icons/md";

import { ModalReturnDevice } from "../ModalReturnDevice/ModalReturnDevice";

export const ActiveDevices = () => {
  const [idDevices, setIdDevices] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { equipment } = useSelector(getUser);

  const clickHandler = (id) => {
    setIdDevices(id);
    onOpen();
  };

  return (
    <Box>
      <ModalReturnDevice
        idDevices={idDevices}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex justifyContent="space-between" p={8}>
        <Heading size="lg">My Equipment</Heading>
      </Flex>
      <Flex flexWrap="wrap" px={8} gap="15px">
        {equipment.length > 0 ? (
          equipment.map(({ id, name, info, sn, type }) => {
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
              >
                <Flex justifyContent="space-between">
                  <MdOutlineImportantDevices size={30} color="main" />
                  <IconButton
                    onClick={() => {
                      clickHandler(id);
                    }}
                    variant="outline"
                    colorScheme="#323b4b"
                    aria-label="Delete"
                    size="sm"
                    icon={<MdOutlineDeleteForever />}
                    _hover={{ bg: "main", color: "white" }}
                  />
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontWeight="bold">{name}</Text>
                  <Text fontSize="sm" color="second">
                    {type}
                  </Text>
                </Flex>
                <Text fontSize="sm">{info}</Text>
                <Text color="second">S/N: {sn}</Text>
              </Flex>
            );
          })
        ) : (
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            w="32%"
            bg="white"
            p={3}
            borderRadius="12px"
            h="120px"
          >
            <MdOutlineSummarize size={30} color="main" />
            <Text fontWeight="bold">Empty</Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
