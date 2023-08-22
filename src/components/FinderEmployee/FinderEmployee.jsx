import { Flex, Heading, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeesFilter } from "../../redux/FilterEmployees/FilterEmployeesSlice";
import { getEmployeesFilter } from "../../redux/selectors";

export const FinderEmployee = () => {
  const dispatch = useDispatch();
  const { query } = useSelector(getEmployeesFilter);

  const handleChange = (e) => {
    dispatch(setEmployeesFilter(e.currentTarget.value));
  };

  return (
    <Flex justifyContent="space-between">
      <Heading size="lg">Employees</Heading>
      <Input
        variant="outline"
        placeholder="Find by name ..."
        w="40%"
        bgColor="white"
        onChange={handleChange}
        value={query ? query : ""}
      />
    </Flex>
  );
};
