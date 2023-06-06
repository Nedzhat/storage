import { useSelector } from "react-redux";
import { getDevices } from "../../redux/selectors";

import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { SiAirtable } from "react-icons/si";

export const ModalAddDevice = ({ idDevices, isOpen, onClose }) => {
  const devices = useSelector(getDevices);
  let selectDevice;
  for (const device of devices) {
    if (device.id === idDevices) {
      selectDevice = device;
    }
  }

  const takeIdDevice = (id) => {
    console.log(`Added devive in my list with ${id} id`);
    onClose();
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Take device</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectDevice ? (
              <Box>
                <Center gap="30px" py={3}>
                  <SiAirtable size="35px" />
                  <BsArrowRight size="35px" />
                  <AiOutlineUser size="35px" />
                </Center>
                <Text fontWeight="bold">{selectDevice.name}</Text>
                <Text fontSize="sm" color="second">
                  {selectDevice.type}
                </Text>
                <Text fontSize="sm">{selectDevice.info}</Text>
                <Text color="second">S/N: {selectDevice.sn}</Text>
              </Box>
            ) : (
              ""
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                takeIdDevice(selectDevice.id);
              }}
              variant="ghost"
            >
              Take device
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
