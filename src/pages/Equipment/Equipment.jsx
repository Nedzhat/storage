import { Box } from "@chakra-ui/react";
import { FilterEquipment } from "../../components/FilterEquipment/FilterEquipment";
import { EquipmentList } from "../../components/EquipmentList/EquipmentList";

export const Equipment = () => {
  return (
    <Box as="section" w="60%" bg="bgColor" p={8} h="100%">
      <FilterEquipment />
      <EquipmentList />
    </Box>
  );
};
