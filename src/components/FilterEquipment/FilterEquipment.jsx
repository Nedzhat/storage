import { Box, Button, Center } from "@chakra-ui/react";
import { buttonStyles } from "./FilterEquipment.styled";
import { resTypesDevices } from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getStatusFilter } from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/slices/filterDeviceSlice";

export const FilterEquipment = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <Box>
      <Center mt={6} mb={3} gap="20px">
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
      <Center mt={3} mb={6} gap="20px">
        {resTypesDevices.map((device, idx) => {
          return (
            <Button key={idx} sx={buttonStyles}>
              {device[0]}
            </Button>
          );
        })}
      </Center>
    </Box>
  );
};
