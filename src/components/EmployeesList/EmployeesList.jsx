import { useSelector } from "react-redux";
import { getDevices, getEmployees } from "../../redux/selectors";

import {
  Button,
  Center,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";

export const EmployeesList = () => {
  const employees = useSelector(getEmployees);
  const devices = useSelector(getDevices);

  return (
    <Flex flexWrap="wrap" mt={8} justifyContent="space-between" gap="20px 0">
      {employees &&
        employees.map(({ name, email, position, projects }, idx) => {
          const equipment = [];
          devices.find((device) => {
            if (device.employee_email === email) {
              equipment.push(device);
            }
          });

          return (
            <Flex
              key={idx}
              flexDirection="column"
              w="100%"
              bg="white"
              p={3}
              borderRadius="12px"
              boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" fontWeight="bold">
                  {name}
                </Text>
                <Text fontSize="sm" color="second">
                  {email}
                </Text>
              </Flex>
              <Text fontWeight="bold">{position}</Text>
              <Text fontSize="sm">{projects}</Text>
              {equipment.length > 0 ? (
                <Popover closeOnBlur={false} placement="bottom">
                  {({ isOpen, onClose }) => (
                    <>
                      <PopoverTrigger>
                        <Button
                          bgColor="bgColor"
                          _hover={{ bg: "main", color: "white" }}
                        >
                          {isOpen ? "Hide" : "Show"} equipment
                        </Button>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent w="800px">
                          <PopoverCloseButton />
                          <PopoverBody>
                            <TableContainer>
                              <Table variant="striped" colorScheme="#323b4b">
                                <Tbody>
                                  {equipment.map((dev) => {
                                    return (
                                      <Tr key={dev.id}>
                                        <Td>{dev.name}</Td>
                                        <Td>{dev.info}</Td>
                                        <Td>{dev.sn}</Td>
                                        <Td>{dev.project}</Td>
                                      </Tr>
                                    );
                                  })}
                                </Tbody>
                              </Table>
                            </TableContainer>
                            <Button
                              mt={4}
                              bgColor="bgColor"
                              onClick={onClose}
                              _hover={{ bg: "main", color: "white" }}
                            >
                              Hide
                            </Button>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </>
                  )}
                </Popover>
              ) : (
                <Center>
                  <Text fontWeight="bold">Without equipment</Text>
                </Center>
              )}
            </Flex>
          );
        })}
    </Flex>
  );
};
