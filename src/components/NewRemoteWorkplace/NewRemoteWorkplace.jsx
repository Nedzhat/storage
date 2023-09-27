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
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";
import { addWorkplaceRemote } from "../../redux/Workplace/operation";

export const NewRemoteWorkplace = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const submitForm = (e) => {
    e.preventDefault();

    const { city, country } = e.target;

    dispatch(
      addWorkplaceRemote({
        employee: user.name,
        employee_email: user.email,
        city: city.value,
        country: country.value,
        name: `${user.name}` + " " + "WP remote in" + " " + `${city.value}`,
      })
    );

    onClose();
  };

  return (
    <Box>
      <Button
        w="100%"
        variant="outline"
        _hover={{ bg: "main", color: "white" }}
        onClick={onOpen}
      >
        Create remote workplace
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create your remote workplace
          </DrawerHeader>

          <DrawerBody>
            <form id="addwp" onSubmit={submitForm}>
              <Stack spacing="24px">
                <Text>Employee: {user.name}</Text>
                <Text>Email: {user.email}</Text>
                <Box>
                  <FormLabel htmlFor="username">City</FormLabel>
                  <Input
                    ref={firstField}
                    id="city"
                    placeholder="Your city"
                    isRequired
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="username">Country</FormLabel>
                  <Input id="country" placeholder="Your country" isRequired />
                </Box>
              </Stack>
            </form>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              w="40%"
              variant="outline"
              bgColor="second"
              color="white"
              _hover={{ bg: "main", color: "white" }}
              type="submit"
              form="addwp"
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
