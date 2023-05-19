import { Flex, Heading, Input } from "@chakra-ui/react";
import { NewDevice } from "../NewDevice/NewDevice";

export const FinderEquipment = () => {
  return (
    <Flex justifyContent="space-between">
      <Heading size="lg">Equipment</Heading>
      <Input
        variant="outline"
        placeholder="Find by name ..."
        w="40%"
        bgColor="white"
      />
      <NewDevice />
    </Flex>
  );
};
