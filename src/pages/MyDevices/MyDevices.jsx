import { Box } from "@chakra-ui/react";
import { ActiveDevices } from "../../components/ActiveDevices/ActiveDevices";
import { History } from "../../components/History/History";

const MyDevices = () => {
  return (
    <Box as="section" bg="bgColor" w="60%" h="100%">
      <ActiveDevices />
      <History />
    </Box>
  );
};

export default MyDevices;
