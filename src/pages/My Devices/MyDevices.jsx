import { Box } from "@chakra-ui/react";
import { ActiveDevices } from "../../components/Active Devices/ActiveDevices";
import { History } from "../../components/History/History";

export const MyDevices = () => {
  return (
    <Box as="section" bg="bgColor" w="60%" h="100%">
      <ActiveDevices />
      <History />
    </Box>
  );
};
