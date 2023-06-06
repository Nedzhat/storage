import { AddIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
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
import employees from "../../../employees.json";
import { useDispatch } from "react-redux";
import { addDevice } from "../../redux/slices/allEquipmentSlice";

export const NewDevice = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const [status, setStatus] = useState("use");
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    const { name, info, sn, type, location, employee } = e.target;

    const res = {
      // id: Date.now(),
      name: name.value,
      info: info.value,
      sn: sn.value,
      type: type.value,
      status,
      location: location.value ? location.value : "none",
      employee: employee.value ? employee.value : "none",
    };
    console.log(res);
    dispatch(
      addDevice({
        name: name.value,
        info: info.value,
        sn: sn.value,
        type: type.value,
        status,
        location: location.value ? location.value : "none",
        employee: employee.value ? employee.value : "none",
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
                  <Select id="type" defaultValue="Laptop" isRequired>
                    <option value="Laptop">Laptop</option>
                    <option value="DevKit">DevKit</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Ram">Ram</option>
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
                    <option value="Closet-1">Closet-1</option>
                    <option value="Closet-2">Closet-2</option>
                    <option value="Closet-3">Closet-3</option>
                  </Select>
                </Box>
                <Select
                  id="employee"
                  defaultValue="none"
                  isDisabled={status === "stock"}
                  placeholder="Select employee"
                  isRequired
                >
                  {employees.map(({ id, name }) => {
                    return (
                      <option key={id} value={name}>
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
