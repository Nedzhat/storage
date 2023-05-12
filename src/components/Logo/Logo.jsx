import { Box, Heading } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Box display="flex" gap="12px" mb="10px">
      <Box
        as="svg"
        width="50"
        height="50"
        viewBox="0 0 161 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        borderRadius="0.75rem"
      >
        <rect x="0.435669" width="159.621" height="159.621" fill="#323B4B" />
        <path
          d="M95.3281 106.168C119.446 102.78 141.078 115.024 148.879 121.569C146.939 117.259 141.548 106.764 135.509 99.2698C129.469 91.7753 121.966 85.1524 118.97 82.7778C119.418 79.9763 118.877 76.6174 113.843 70.372C108.81 64.1266 101.764 57.0632 79.4116 51.492C57.0587 45.9209 51.0101 49.5998 45.8179 43.1571C40.6257 36.7145 43.9569 27.2011 45.1141 25.7263C41.445 30.1291 34.0409 49.8426 53.201 60.1261C59.5732 63.5461 78.6742 67.1447 89.1716 72.7819C97.5695 77.2916 99.4069 80.1089 98.1865 82.1769C83.7774 75.716 49.3634 65.9341 28.283 62.6052C12.584 60.1261 9.92363 60.1261 5.01155e-06 60.1261L0 135.393C37.2569 120.037 28.283 121.569 59.7913 113.12C72.0744 109.826 71.2099 109.556 95.3281 106.168Z"
          fill="white"
        />
      </Box>
      <Box>
        <Heading as="h1" fontSize="4xl" color="main" lineHeight="0.8">
          Storage
        </Heading>
        <Heading as="h2" size="sx" color="main" lineHeight="1.8">
          Sirin Software
        </Heading>
      </Box>
    </Box>
  );
};
