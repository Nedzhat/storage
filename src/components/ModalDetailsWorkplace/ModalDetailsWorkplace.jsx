import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
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
import { getDevices, getUser } from "../../redux/selectors";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { changeStatusWorkplace } from "../../redux/Workplace/operation";

export const ModalDetailsWorkplace = ({
  selectedWorkplace,
  isOpen,
  onClose,
}) => {
  const devices = useSelector(getDevices);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const takeWorkplace = () => {
    dispatch(
      changeStatusWorkplace({
        employee_email: user.email,
        employee: user.name,
        status: "reserved",
        name: selectedWorkplace.name,
      })
    );
    onClose();
  };

  const returnWorkplace = () => {
    dispatch(
      changeStatusWorkplace({
        employee_email: "",
        employee: "",
        status: "free",
        name: selectedWorkplace.name,
      })
    );
    onClose();
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {selectedWorkplace && (
          <ModalContent>
            <ModalHeader textTransform="uppercase">
              Workplace - "{selectedWorkplace.name}"
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="second">{selectedWorkplace.status}</Text>
                {selectedWorkplace.status === "free" && (
                  <Button
                    onClick={takeWorkplace}
                    variant="outline"
                    _hover={{ bg: "main", color: "white" }}
                  >
                    <AddIcon />
                  </Button>
                )}
                {selectedWorkplace.status === "reserved" &&
                  selectedWorkplace.employee_email === user.email && (
                    <Button
                      onClick={returnWorkplace}
                      variant="outline"
                      _hover={{ bg: "main", color: "white" }}
                    >
                      <MinusIcon />
                    </Button>
                  )}
              </Flex>
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
