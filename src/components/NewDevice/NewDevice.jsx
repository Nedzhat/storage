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
} from "@chakra-ui/react";
import { arrayOfType } from "../../redux/Equipment/constants";
import { getEmployees } from "../../redux/selectors";
import { createDevice } from "../../redux/Equipment/operation";

const findEmployeeEmail = (employees, name) => {
  const result = employees.find((emp) => emp.name === name);
  return result.email;
};

export const NewDevice = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState("use");

  const dispatch = useDispatch();
  const firstField = useRef();

  const employees = useSelector(getEmployees);

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
        location: location.value ? location.value : null,
        employee: employee.value ? employee.value : null,
        employee_email: employee.value
          ? findEmployeeEmail(employees, employee.value)
          : null,
        project: null,
      })
    );

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
                  <Input id="sn" placeholder="Please enter serial number" />
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
                    Select location or employee
                  </FormLabel>
                  <Select
                    id="location"
                    defaultValue="none"
                    isDisabled={status === "use"}
                    placeholder="Select location"
                    isRequired
                  >
                    <option value="Closet-1">Closet A</option>
                    <option value="Closet-2">Closet B</option>
                    <option value="Closet-3">Closet C</option>
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
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
