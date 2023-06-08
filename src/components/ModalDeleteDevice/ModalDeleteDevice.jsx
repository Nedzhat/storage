import { useDispatch, useSelector } from "react-redux";
import { getUserDevices } from "../../redux/selectors";
import { deleteDeviceFromUser } from "../../redux/userDevices/userDevicesSlice";

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

export const ModalDeleteDevice = ({ idDevices, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const allDevices = useSelector(getUserDevices);

  let selectDevice;
  for (const device of allDevices) {
    if (device.id === idDevices) {
      selectDevice = device;
    }
  }

  const takeIdDevice = (id) => {
    dispatch(deleteDeviceFromUser(id));
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
            {selectDevice && (
              <Box>
                <Center gap="30px" py={3}>
                  <AiOutlineUser size="35px" />
                  <BsArrowRight size="35px" />
                  <SiAirtable size="35px" />
                </Center>
                <Text fontWeight="bold">{selectDevice.name}</Text>
                <Text fontSize="sm" color="second">
                  {selectDevice.type}
                </Text>
                <Text fontSize="sm">{selectDevice.info}</Text>
                <Text color="second">S/N: {selectDevice.sn}</Text>
              </Box>
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
              I'm return device
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
