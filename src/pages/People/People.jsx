import { Box, Heading } from "@chakra-ui/react";
import { FilterPeople } from "../../components/FilterPeople/FilterPeople";
import { EmployeesList } from "../../components/EmployeesList/EmployeesList";

export const People = () => {
  return (
    <Box as="section" w="60%" bg="bgColor" p={8} h="100%">
      <FilterPeople />
      <EmployeesList />
    </Box>
  );
};
