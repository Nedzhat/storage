import { Box, Button, Center } from "@chakra-ui/react";
import { buttonStyles } from "./FilterEquipment.styled";
import { resTypesDevices } from "../Sidebar/Sidebar";

export const FilterEquipment = () => {
  return (
    <Box>
      <Center mt={6} mb={3} gap="20px">
        <Button sx={buttonStyles} isActive>
          ALL
        </Button>
        <Button sx={buttonStyles}>STOCK</Button>
        <Button sx={buttonStyles}>USE</Button>
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
