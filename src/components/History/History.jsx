import {
  Box,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import history from "../../../history.json";

export const History = () => {
  return (
    <Box p={8}>
      <Box
        bg="white"
        borderRadius="12px"
        p={8}
        boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
      >
        <Heading size="lg">History</Heading>
        <TableContainer>
          <Table variant="striped" colorScheme="#323b4b">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Action</Th>
                <Th>Date</Th>
                <Th>Location</Th>
                <Th>Serial Number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {history.length > 0 &&
                history.map(({ name, action, date, location, sn }, idx) => {
                  return (
                    <Tr key={idx}>
                      <Td>{name}</Td>
                      <Td>{action}</Td>
                      <Td>{date}</Td>
                      <Td>{location}</Td>
                      <Td>{sn}</Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
          {history.length === 0 && (
            <Text textAlign="center" color="second" fontSize="3xl" mt={4}>
              Here will be history of your equipment
            </Text>
          )}
        </TableContainer>
      </Box>
    </Box>
  );
};
