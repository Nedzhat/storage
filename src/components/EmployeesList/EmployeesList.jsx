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

import employees from "../../../employees.json";
import allDevices from "../../../allDevices.json";

export const EmployeesList = () => {
  return (
    <Flex flexWrap="wrap" mt={8} justifyContent="space-between" gap="20px 0">
      {employees.map(({ id, name, position, equipment }) => {
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
                                  const filRes = allDevices.find(
                                    (device) => device.id === dev
                                  );
                                  return (
                                    <Tr key={filRes.id}>
                                      <Td>{filRes.name}</Td>
                                      <Td>{filRes.info}</Td>
                                      <Td>{filRes.sn}</Td>
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
