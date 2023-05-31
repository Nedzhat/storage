import { Center, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Center as="section" bg="bgColor" w="60%" h="100wh">
      <Text fontWeight="bold">
        Sorry, but we can't found your page. Try again 😭
      </Text>
    </Center>
  );
};

export default NotFound;
