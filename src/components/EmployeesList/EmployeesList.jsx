import {
  Button,
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
import employees from "../../../employees.json";
import MyDevices from "../../../MyDevices.json";

export const EmployeesList = () => {
  const filterDevices = (devices) => {
    // console.log(employees);
    // console.log(MyDevices);
    // console.log(devices);
    const r = devices.find((dev) => dev.id === employees[0].devices[1]);
    // console.log(r);
    return r;
  };

  const res = filterDevices(MyDevices);
  //   console.log(res);

  return (
    <Flex flexWrap="wrap" mt={8} justifyContent="space-between" gap="20px 0">
      {employees.map(({ id, name, position, devices }) => {
        return (
          <Flex
            key={id}
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
                {position}
              </Text>
            </Flex>
            <Text fontSize="sm">{position}</Text>
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
                              {/* {console.log(MyDevices)} */}
                              <Tr>
                                <Td>{res.name}</Td>
                                <Td>{res.info}</Td>
                                <Td>{res.sn}</Td>
                              </Tr>
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
          </Flex>
        );
      })}
    </Flex>
  );
};

// myDevices.map => devices []
