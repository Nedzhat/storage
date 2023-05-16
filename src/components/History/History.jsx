import {
  Box,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import history from "../../../history.json";

export const History = () => {
  return (
    <Box p={8}>
      <Box bg="white" borderRadius="12px" p={8}>
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
              {history.map(({ name, action, date, location, sn }, idx) => {
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
        </TableContainer>
      </Box>
    </Box>
  );
};
