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

export const ModalAddDevice = ({ choiceDevice, isOpen, onClose }) => {
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
            {choiceDevice && (
              <Box>
                <Center gap="30px" py={3}>
                  <SiAirtable size="35px" />
                  <BsArrowRight size="35px" />
                  <AiOutlineUser size="35px" />
                </Center>
                <Text fontWeight="bold">{choiceDevice.name}</Text>
                <Text fontSize="sm" color="second">
                  {choiceDevice.type}
                </Text>
                <Text fontSize="sm">{choiceDevice.info}</Text>
                <Text color="second">S/N: {choiceDevice.sn}</Text>
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                submitDeviceForUser(choiceDevice);
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
