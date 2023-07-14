import { Flex, Heading, Input } from "@chakra-ui/react";
import { NewDevice } from "../NewDevice/NewDevice";
import { useDispatch } from "react-redux";
import { setQueryFilter } from "../../redux/filterEquipment/filterDeviceSlice";

export const FinderEquipment = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setQueryFilter(e.currentTarget.value));
  };

  return (
    <Flex justifyContent="space-between">
      <Heading size="lg">Equipment</Heading>
      <Input
        variant="outline"
        placeholder="Find by name ..."
        w="40%"
        bgColor="white"
        onChange={handleChange}
      />
      <NewDevice />
    </Flex>
  );
};
