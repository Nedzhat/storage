import { Box } from "@chakra-ui/react";
import { EmployeesList } from "../../components/EmployeesList/EmployeesList";
import { FinderPeople } from "../../components/FinderPeople/FinderPeople";

const Employees = () => {
  return (
    <Box as="section" w="60%" bg="bgColor" p={8} h="100%">
      <FinderPeople />
      <EmployeesList />
    </Box>
  );
};

export default Employees;
