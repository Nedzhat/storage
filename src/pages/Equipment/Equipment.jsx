import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchDevices } from "../../redux/Equipment/operation";

import { Box } from "@chakra-ui/react";

import { EquipmentList } from "../../components/EquipmentList/EquipmentList";
import { FinderEquipment } from "../../components/FinderEquipment/FinderEquipment";
import { FilterEquipment } from "../../components/FilterEquipment/FilterEquipment";

const Equipment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);

  return (
    <Box as="section" w="60%" bg="bgColor" p={8} h="100%">
      <FinderEquipment />
      <FilterEquipment />
      <EquipmentList />
    </Box>
  );
};

export default Equipment;
