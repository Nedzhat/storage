import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { getDevices } from "../../redux/selectors";

export const ModalDetailsWorkplace = ({
  selectedWorkplace,
  isOpen,
  onClose,
}) => {
  const devices = useSelector(getDevices);

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {selectedWorkplace && (
          <ModalContent>
            <ModalHeader textTransform="uppercase">
              Workplace - "{selectedWorkplace.name}"
              <Text color="second">{selectedWorkplace.status}</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedWorkplace.status === "reserved" && (
                <Flex mb={4} justifyContent="space-between">
                  <Text fontWeight="bold">{selectedWorkplace.employee}</Text>
                  <Text color="second">{selectedWorkplace.employee_email}</Text>
                </Flex>
              )}
              <Box>
                {devices.map((dev) => {
                  if (dev.location === selectedWorkplace.name) {
                    return (
                      <Flex key={dev.id} justifyContent="space-between">
                        <Text fontWeight="bold">{dev.name}</Text>
                        <Text color="second">S/N: {dev.sn}</Text>
                      </Flex>
                    );
                  }
                })}
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </Box>
  );
};
