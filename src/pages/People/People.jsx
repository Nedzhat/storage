import { Box } from "@chakra-ui/react";
import { EmployeesList } from "../../components/EmployeesList/EmployeesList";
import { FinderPeople } from "../../components/FinderPeople/FinderPeople";

export const People = () => {
  return (
    <Box as="section" w="60%" bg="bgColor" p={8} h="100%">
      <FinderPeople />
      <EmployeesList />
    </Box>
  );
};
