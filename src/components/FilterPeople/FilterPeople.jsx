import { Flex, Heading, Input } from "@chakra-ui/react";

export const FilterPeople = () => {
  return (
    <Flex justifyContent="space-between">
      <Heading size="lg">Employees</Heading>
      <Input
        variant="outline"
        placeholder="Find by name ..."
        w="40%"
        bgColor="white"
      />
    </Flex>
  );
};