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
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

export const NewUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <Box>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        Create user
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
          <DrawerHeader borderBottomWidth="1px">Create a new user</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input
                  ref={firstField}
                  id="name"
                  placeholder="Please enter user name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Surname</FormLabel>
                <Input
                  ref={firstField}
                  id="surname"
                  placeholder="Please enter user surname"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="url">Email</FormLabel>
                <InputGroup>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Please enter user email"
                  />
                  <InputRightAddon>@sirinsoftware.com</InputRightAddon>
                </InputGroup>
              </Box>
              <Box>
                <FormLabel htmlFor="username">Position</FormLabel>
                <Input
                  ref={firstField}
                  id="position"
                  placeholder="Please enter user position"
                />
              </Box>
              {/* <Box>
                <FormLabel htmlFor="owner">Select Owner</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
              </Box> */}
              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
