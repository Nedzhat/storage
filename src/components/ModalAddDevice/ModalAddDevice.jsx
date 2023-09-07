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
  RadioGroup,
  Stack,
  Text,
  Radio,
  Select,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { SiAirtable } from "react-icons/si";
import { addDeviceForUser } from "../../redux/Equipment/operation";
import {
  getUser,
  getWorkplace,
  getWorkplaceEmployee,
} from "../../redux/selectors";
import { useState } from "react";

export const ModalAddDevice = ({ selectedDevice, isOpen, onClose }) => {
  const [status, setStatus] = useState("my");
  const [loc, setLoc] = useState("");

  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const workplacesEmployee = useSelector(getWorkplaceEmployee);
  const workplaces = useSelector(getWorkplace);

  const submitDeviceForUser = (device) => {
    setLoc("");
    console.log({
      name: device.name,
      sn: device.sn,
      location: device.location,
      employee_email: user.email,
      action: "Take",
      date: Date.now(),
    });
    const newLocation = loc.target.value;
    dispatch(addDeviceForUser({ device, user, newLocation }));
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
                <Center mt={4}>
                  <Text>I will use it at: </Text>
                  <RadioGroup onChange={setStatus} value={status} ml={3}>
                    <Stack direction="row" gap="10px">
                      <Radio value="my">My location</Radio>
                      <Radio value="all">All workplaces</Radio>
                    </Stack>
                  </RadioGroup>
                </Center>
                <Box mt={4}>
                  <Select
                    id="my"
                    defaultValue="none"
                    isDisabled={status === "all"}
                    placeholder="Select location"
                    onChange={setLoc}
                    isRequired
                  >
                    {workplacesEmployee.length > 0 &&
                      workplacesEmployee.map(({ name }) => {
                        return (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        );
                      })}
                  </Select>
                </Box>
                <Box mt={4}>
                  <Select
                    id="all"
                    defaultValue="none"
                    isDisabled={status === "my"}
                    placeholder="Select location"
                    onChange={setLoc}
                    isRequired
                  >
                    {workplaces.length > 0 &&
                      workplaces.map(({ name }) => {
                        return (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        );
                      })}
                  </Select>
                </Box>
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              isDisabled={loc === "" || loc.target.value.length === 0}
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
