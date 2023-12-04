import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  getDevices,
  getEmployees,
  getWorkplacesFive,
  getWorkplacesRemote,
  getWorkplacesSix,
} from "../../redux/selectors";
import { ChevronDownIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Admin = () => {
  const [employee, setEmployee] = useState({});

  const employees = useSelector(getEmployees);
  // const devices = useSelector(getDevices);
  // const wpSix = useSelector(getWorkplacesSix);
  // const wpFive = useSelector(getWorkplacesFive);
  // const wpRemote = useSelector(getWorkplacesRemote);

  const selectEmplopyee = (e) => {
    employees.map((employee) => {
      if (employee.email === e.target.value) {
        setEmployee(employee);
      }
    });
    if ("" === e.target.value) {
      setEmployee("");
    }
  };

  const handleFieldChange = (field, newValue) => {
    setEmployee({
      ...employee,
      [field]: newValue,
    });
  };

  const submitFormEmployeeEdit = (e) => {
    e.preventDefault();
    console.log(employee);
  };

  return (
    <Box as="section" w="60%" bg="bgColor" p={8} minH="100vh" h="auto">
      <Box as="section" p={3}>
        <Heading size="lg" mb={3}>
          Employees editor
        </Heading>

        <Select
          icon={<ChevronDownIcon />}
          placeholder="Choose employee"
          w="30%"
          backgroundColor="white"
          onChange={selectEmplopyee}
        >
          {employees.map(({ email, position, name, projects, id }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </Select>
        {employee.email && (
          <Flex gap="50px">
            <Box w="30%">
              <form onSubmit={submitFormEmployeeEdit}>
                {Object.keys(employee).map((field) => (
                  <Box key={field}>
                    <FormLabel htmlFor={field}>{field}:</FormLabel>
                    <Input
                      type="text"
                      id={field}
                      name={field}
                      value={employee[field] || ""}
                      onChange={(e) => handleFieldChange(field, e.target.value)}
                    />
                  </Box>
                ))}
                <button type="submit">Сохранить</button>
              </form>
              {/* <form id="employeeEdit" onSubmit={submitFormEmployeeEdit}>
                <Stack spacing="4px">
                  <Box>
                    <FormLabel htmlFor="name">Name: {employee.name}</FormLabel>
                    <Input id="name" placeholder="New name" isRequired />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="email">
                      Email: {employee.email}
                    </FormLabel>
                    <Input id="email" placeholder="New email" isRequired />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="position">
                      Position: {employee.position}
                    </FormLabel>
                    <Input
                      id="position"
                      placeholder="New position"
                      isRequired
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="projects">
                      Projects: {employee.projects}
                    </FormLabel>
                    <Input
                      id="projects"
                      placeholder="New projects"
                      isRequired
                    />
                  </Box>
                </Stack>
              </form> */}
            </Box>
            <Flex w="50%" flexDirection="column" gap="50px">
              <Button
                w="50%"
                variant="outline"
                bgColor="#ffe7e5"
                _hover={{ bg: "red", color: "white" }}
                // onClick={onClose}
              >
                <DeleteIcon w="2rem" h="1.5rem" />
                Delete employee
              </Button>
              <Button
                w="50%"
                variant="outline"
                bgColor="second"
                color="white"
                _hover={{ bg: "main", color: "white" }}
                type="submit"
                form="employeeEdit"
              >
                Edit employee
              </Button>
            </Flex>
          </Flex>
        )}
      </Box>
      <Box as="section" p={3}>
        <Heading size="lg">Equipment editor</Heading>
      </Box>
      <Box as="section" p={3}>
        <Heading size="lg">Workplaces editor</Heading>
      </Box>
    </Box>
  );
};

export default Admin;

{
  /* <Input
          variant="outline"
          placeholder="Find by name ..."
          w="40%"
          bgColor="white"
          onChange={handleChange}
          value={query ? query : ""}
        /> */
}
