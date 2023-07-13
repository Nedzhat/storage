import { Box } from "@chakra-ui/react";

import { EquipmentList } from "../../components/EquipmentList/EquipmentList";
import { FinderEquipment } from "../../components/FinderEquipment/FinderEquipment";
import { FilterEquipment } from "../../components/FilterEquipment/FilterEquipment";

const Equipment = () => {
  return (
    <Box as="section" w="60%" bg="bgColor" p={8} minH="100vh" h="auto">
      <FinderEquipment />
      <FilterEquipment />
      <EquipmentList />
    </Box>
  );
};

export default Equipment;
