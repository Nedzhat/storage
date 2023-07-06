import { useDispatch, useSelector } from "react-redux";

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
import { addDeviceForUser } from "../../redux/Equipment/operation";
import { getUser } from "../../redux/selectors";

export const ModalAddDevice = ({ selectedDevice, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const submitDeviceForUser = (device) => {
    dispatch(addDeviceForUser({ device, user }));
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
            {selectedDevice && (
              <Box>
                <Center gap="30px" py={3}>
                  <SiAirtable size="35px" />
                  <BsArrowRight size="35px" />
                  <AiOutlineUser size="35px" />
                </Center>
                <Text fontWeight="bold">{selectedDevice.name}</Text>
                <Text fontSize="sm" color="second">
                  {selectedDevice.type}
                </Text>
                <Text fontSize="sm">{selectedDevice.info}</Text>
                <Text color="second">S/N: {selectedDevice.sn}</Text>
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                submitDeviceForUser(selectedDevice);
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
