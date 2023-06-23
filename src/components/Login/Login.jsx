import { useDispatch, useSelector } from "react-redux";

import { logIn } from "../../redux/user/operation";
import { getUser } from "../../redux/selectors";

import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logIn());
  };

  return (
    <Flex
      as="section"
      bg="bgColor"
      h="100vh"
      flexDirection="column"
      alignItems="center"
      p={16}
    >
      <Box
        as="svg"
        width="240"
        height="240"
        viewBox="0 0 638 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M545.895 85.141C553.892 84.0177 561.063 88.0769 563.65 90.2469C563.006 88.8178 561.219 85.3385 559.217 82.8538C557.214 80.369 554.727 78.1732 553.734 77.386C553.882 76.4571 553.703 75.3435 552.034 73.2729C550.365 71.2023 548.029 68.8604 540.618 67.0134C533.207 65.1663 531.202 66.386 529.481 64.25C527.759 62.1139 528.864 58.9598 529.247 58.4709C528.031 59.9306 525.576 66.4665 531.928 69.8759C534.041 71.0098 540.374 72.2029 543.854 74.0719C546.638 75.5671 547.248 76.5011 546.843 77.1867C542.066 75.0447 530.742 70.748 523.667 70.6979C516.591 70.6477 509.675 75.3826 507.102 77.7563C509.46 77.7133 515.804 78.2214 522.313 80.5974C528.822 82.9735 532.892 86.153 534.113 87.4457C534.709 87.1455 537.899 86.2643 545.895 85.141Z"
          fill="#323B4B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M323.984 78.0033C394.374 41.4171 419.164 108.878 535.596 95.6283C435.801 126.095 401.036 50.3777 323.984 78.0033V78.0033Z"
          fill="#323B4B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M291.495 97.122C374.475 43.2308 403.308 119.564 519.235 104.967C502.208 110.331 486.54 112.596 471.885 112.844C350.002 161.855 271.546 75.3687 73.9854 115.879C229.251 65.5407 349.657 134.051 439.966 110.372C386.044 101.484 344.291 73.1111 291.495 97.1221L291.495 97.122Z"
          fill="#323B4B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M413.872 0.40332C403.529 88.757 481.09 84.876 530.5 94.0088C469.441 61.9979 426.748 77.1127 413.872 0.40332V0.40332Z"
          fill="#323B4B"
        />
      </Box>
      <Heading as="h1" size="4xl">
        Sirin Software Storage
      </Heading>
      <Button
        onClick={handleClick}
        leftIcon={<FcGoogle />}
        variant="outline"
        mt={8}
        p={8}
        size="lg"
        colorScheme="#323b4b"
        _hover={{ bg: "main", color: "white" }}
      >
        Sign In with Google
      </Button>
    </Flex>
  );
};
