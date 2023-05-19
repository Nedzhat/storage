import { AddIcon } from "@chakra-ui/icons";
import React from "react";
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
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

export const NewDevice = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [status, setStatus] = React.useState("Use");

  const submitForm = (e) => {
    e.preventDefault();

    const location = (e) => {
      let res = "";

      if (status === "Use") {
        res = "none";
      } else {
        res = e.target.location.value;
      }
      return res;
    };

    const res = {
      id: Date.now(),
      name: e.target.name.value,
      info: e.target.info.value,
      sn: e.target.sn.value,
      type: e.target.type.value,
      status: status,
      location: location(e),
    };
    console.log(res);
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
                  <FormLabel htmlFor="username">Name</FormLabel>
                  <Input
                    ref={firstField}
                    id="name"
                    placeholder="Please enter device's name"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="info">Info</FormLabel>
                  <Input
                    id="info"
                    placeholder="Please enter main info about device"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="sn">Serial Number</FormLabel>
                  <Input id="sn" placeholder="Please enter serial number" />
                </Box>
                <Box>
                  <FormLabel htmlFor="type">Select type</FormLabel>
                  <Select id="type" defaultValue="Laptop">
                    <option value="Laptop">Laptop</option>
                    <option value="DevKit">DevKit</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Ram">Ram</option>
                  </Select>
                </Box>
                <RadioGroup onChange={setStatus} value={status}>
                  <Stack direction="row" gap="10px">
                    <Radio value="Use">Use</Radio>
                    <Radio value="Stock">Stock</Radio>
                  </Stack>
                </RadioGroup>
                <Box>
                  <FormLabel htmlFor="location">Select location</FormLabel>
                  <Select
                    id="location"
                    defaultValue="Closet-1"
                    isDisabled={status === "Use"}
                  >
                    {/* <option value="None">None</option> */}
                    <option value="Closet-1">Closet-1</option>
                    <option value="Closet-2">Closet-2</option>
                    <option value="Closet-3">Closet-3</option>
                  </Select>
                </Box>
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
