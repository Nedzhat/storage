import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import allDevices from "../../../allDevices.json";

export const ModalWindow = ({ idDevices, isOpen, onClose }) => {
  let selectDevice;
  for (const device of allDevices) {
    if (device.id === idDevices) {
      selectDevice = device;
    }
  }

  const takeIdDevice = (id) => {
    console.log(id);
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
            {selectDevice ? (
              <Box>
                <p>{selectDevice.name}</p>
                <p>{selectDevice.info}</p>
                <p>{selectDevice.sn}</p>
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
              I'm return device
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
