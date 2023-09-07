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
import { getUser } from "../../redux/selectors";
import { returnDevice } from "../../redux/Equipment/operation";

export const ModalReturnDevice = ({ selectedDevice, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const takeIdDevice = (id) => {
    console.log({
      name: selectedDevice.name,
      sn: selectedDevice.sn,
      location: selectedDevice.location,
      employee_email: user.email,
      action: "Return",
      date: Date.now(),
    });
    dispatch(returnDevice(id));
    onClose();
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Return device for sorting table</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedDevice && (
              <Box>
                <Center gap="30px" py={3}>
                  <AiOutlineUser size="35px" />
                  <BsArrowRight size="35px" />
                  <SiAirtable size="35px" />
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
                takeIdDevice(selectedDevice.id);
              }}
              variant="ghost"
            >
              I'm return device
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
