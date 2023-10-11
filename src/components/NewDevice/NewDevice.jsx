import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { arrayOfType } from "../../redux/Equipment/constants";
import { getDevices, getEmployees, getWorkplace } from "../../redux/selectors";
import { createDevice } from "../../redux/Equipment/operation";
import { createAction } from "../../redux/History/operation";

const getEmployeeEmail = (employees, name) => {
  const result = employees.find((emp) => emp.name === name);
  return result.email;
};

export const NewDevice = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState("use");
  const [checkSn, setCheckSn] = useState(false);

  const dispatch = useDispatch();
  const firstField = useRef();

  const employees = useSelector(getEmployees);
  const workplaces = useSelector(getWorkplace);
  const devices = useSelector(getDevices);

  const validSn = (e) => {
    const sn = e.target.value.toLowerCase();
    const isSnValid = devices.some((dev) => dev.sn.toLowerCase() === sn);

    if (isSnValid) {
      setCheckSn(true);
    } else {
      setCheckSn(false);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { name, info, sn, type, location, employee } = e.target;

    dispatch(
      createDevice({
        name: name.value,
        info: info.value,
        sn: sn.value,
        type: type.value,
        status,
        location: location.value || null,
        employee: status === "use" ? employee.value : null,
        employee_email:
          status === "use" ? getEmployeeEmail(employees, employee.value) : null,
        project: null,
      })
    );

    if (status === "use") {
      dispatch(
        createAction({
          name: name.value,
          sn: sn.value,
          location: location.value,
          employee_email: getEmployeeEmail(employees, employee.value),
          action: "Take",
          date: Date.now(),
        })
      );
    }

    onClose();
  };

  return (
    <Box>
      <Button
        leftIcon={<AddIcon />}
        variant="outline"
        _hover={{ bg: "main", color: "white" }}
        onClick={onOpen}
      >
        Create device
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new device
          </DrawerHeader>
          <DrawerBody>
            <form id="addDevice" onSubmit={submitForm}>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    ref={firstField}
                    id="name"
                    placeholder="Please enter device's name"
                    isRequired
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="info">Info</FormLabel>
                  <Input
                    id="info"
                    placeholder="Please enter main info about device"
                    isRequired
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="sn">Serial Number</FormLabel>
                  {checkSn && (
                    <Text color="red">Serial number already exists</Text>
                  )}
                  <Input
                    id="sn"
                    placeholder="Please enter serial number"
                    isInvalid={checkSn}
                    errorBorderColor="crimson"
                    isRequired
                    onChange={validSn}
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="type">Select type</FormLabel>
                  <Select id="type" isRequired>
                    {arrayOfType.map((type, idx) => {
                      return (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      );
                    })}
                  </Select>
                </Box>
                <RadioGroup onChange={setStatus} value={status}>
                  <Stack direction="row" gap="10px">
                    <Radio value="use">Use</Radio>
                    <Radio value="stock">Stock</Radio>
                  </Stack>
                </RadioGroup>
                <Box>
                  <FormLabel htmlFor="location">
                    {status === "use"
                      ? "Select the employee and the location where he will use it"
                      : "Select his location"}
                  </FormLabel>
                  <Select
                    id="location"
                    defaultValue="none"
                    placeholder="Select location"
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
                <Select
                  id="employee"
                  defaultValue="none"
                  isDisabled={status === "stock"}
                  placeholder="Select employee"
                  isRequired
                >
                  {employees.map(({ name }, idx) => {
                    return (
                      <option key={idx} value={name}>
                        {name}
                      </option>
                    );
                  })}
                </Select>
              </Stack>
            </form>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px" justifyContent="space-between">
            <Button
              variant="outline"
              mr={3}
              _hover={{ bg: "main", color: "white" }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              w="40%"
              variant="outline"
              bgColor="second"
              color="white"
              _hover={{ bg: "main", color: "white" }}
              type="submit"
              form="addDevice"
              isDisabled={checkSn}
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
