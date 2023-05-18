import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import { NewUser } from "../../components/NewUser/NewUser";

export const FilterPeople = () => {
  return (
    <Flex justifyContent="space-between" gap="10px">
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
