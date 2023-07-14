import { Center } from "@chakra-ui/react";
import { ProgressBar } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Center w="100%" minH="100vh">
      <ProgressBar
        height="120"
        width="120"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#989ca4"
        barColor="#989ca4"
      />
    </Center>
  );
};
