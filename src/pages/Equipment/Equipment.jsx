import { Box } from "@chakra-ui/react";

import { EquipmentList } from "../../components/EquipmentList/EquipmentList";
import { FinderEquipment } from "../../components/FinderEquipment/FinderEquipment";
import { FilterEquipment } from "../../components/FilterEquipment/FilterEquipment";

export const Equipment = () => {
  return (
    <Box as="section" w="60%" bg="bgColor" p={8} h="100%">
      <FinderEquipment />
      <FilterEquipment />
      <EquipmentList />
    </Box>
  );
};
