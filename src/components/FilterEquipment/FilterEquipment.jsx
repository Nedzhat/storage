import { useDispatch, useSelector } from "react-redux";
import {
  getDevices,
  getStatusFilter,
  getTypeFilter,
} from "../../redux/selectors";

import { Box, Button, Center } from "@chakra-ui/react";

import { buttonStyles } from "./FilterEquipment.styled";

import { statusFilters } from "../../redux/filterEquipment/constants";
import {
  setStatusFilter,
  setTypeFilter,
} from "../../redux/filterEquipment/filterDeviceSlice";
import { arrayOfType } from "../../redux/Equipment/constants";

export const FilterEquipment = () => {
  const devices = useSelector(getDevices);

  const dispatch = useDispatch();

  const filter = useSelector(getStatusFilter);
  const filterType = useSelector(getTypeFilter);

  const handleFilterTypeChange = (filter) => dispatch(setTypeFilter(filter));
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <Box>
      <Center
        mt={6}
        mb={3}
        gap="20px"
        boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
        borderRadius="20px"
        p={6}
      >
        <Button
          sx={buttonStyles}
          isActive={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          ALL
        </Button>
        <Button
          sx={buttonStyles}
          isActive={filter === statusFilters.stock}
          onClick={() => handleFilterChange(statusFilters.stock)}
        >
          STOCK
        </Button>
        <Button
          sx={buttonStyles}
          isActive={filter === statusFilters.use}
          onClick={() => handleFilterChange(statusFilters.use)}
        >
          USE
        </Button>
      </Center>
      <Center
        mt={3}
        mb={6}
        gap="20px"
        flexWrap="wrap"
        boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
        borderRadius="20px"
        p={6}
      >
        <Button
          sx={buttonStyles}
          isActive={filterType === "all"}
          onClick={() => handleFilterTypeChange("all")}
        >
          ALL
        </Button>
        {arrayOfType.map((type, idx) => {
          return (
            <Button
              key={idx}
              sx={buttonStyles}
              isActive={filterType === type}
              onClick={() => handleFilterTypeChange(type)}
            >
              {type}
            </Button>
          );
        })}
      </Center>
    </Box>
  );
};
