import { Box } from "@chakra-ui/react";
import { EmployeesList } from "../../components/EmployeesList/EmployeesList";
import { FinderEmployee } from "../../components/FinderEmployee/FinderEmployee";

const Employees = () => {
  return (
    <Box as="section" w="60%" bg="bgColor" p={8} h="100%">
      <FinderEmployee />
      <EmployeesList />
    </Box>
  );
};

export default Employees;
