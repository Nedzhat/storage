import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { TbHome2 } from "react-icons/tb";
import { BiCabinet } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import "./WorkplaceHeadoffice.css";

export const WorkplaceHeadoffice = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" mb={4}>
        <Heading size="lg">Workplace</Heading>
        <Flex gap="15px">
          <Button
            variant="outline"
            gap="5px"
            _hover={{ bg: "main", color: "white" }}
          >
            <HiOutlineBuildingOffice2 size={25} />
            6.3
          </Button>
          <Button
            variant="outline"
            gap="5px"
            _hover={{ bg: "main", color: "white" }}
          >
            <HiOutlineBuildingOffice2 size={25} />
            5.2
          </Button>
          <Button
            variant="outline"
            gap="5px"
            _hover={{ bg: "main", color: "white" }}
          >
            <TbHome2 size={25} />
            REMOTE
          </Button>
          <Button
            variant="outline"
            gap="5px"
            _hover={{ bg: "main", color: "white" }}
          >
            <BiCabinet size={25} />
            CLOSETS
          </Button>
        </Flex>
      </Flex>
      <Heading size="md" textAlign="center">
        HEAD OFFICE
      </Heading>
      <Flex
        p={5}
        w="100%"
        borderRadius="12px"
        boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
        flexDirection="column"
      >
        <Box>
          <Text textAlign="center" fontSize="xl" fontWeight="bold">
            6.3
          </Text>
        </Box>
        <div className="container">
          <div className="place">
            <p>NC4/P1</p>
          </div>
          <div className="place">
            <p>NC4/P2</p>
          </div>
          <div className="place">
            <p>SC4/P1</p>
          </div>
          <div className="place">
            <p>SC4/P2</p>
          </div>
          <div className="place">
            <p>NC4/P3</p>
          </div>
          <div className="place">
            <p>NC4/P4</p>
          </div>
          <div className="place">
            <p>SC4/P3</p>
          </div>
          <div className="place">
            <p>SC4/P4</p>
          </div>
          <div className="place">
            <p>NC3/P1</p>
          </div>
          <div className="place">
            <p>NC3/P2</p>
          </div>
          <div className="place">
            <p>SC3/P1</p>
          </div>
          <div className="place">
            <p>SC3/P2</p>
          </div>
          <div className="place">
            <p>NC3/P3</p>
          </div>
          <div className="place">
            <p>NC3/P4</p>
          </div>
          <div className="place">
            <p>SC3/P3</p>
          </div>
          <div className="place">
            <p>SC3/P4</p>
          </div>
          <div className="place">
            <p>NC2/P1</p>
          </div>
          <div className="place">
            <p>NC2/P2</p>
          </div>
          <div className="place">
            <p>SC2/P1</p>
          </div>
          <div className="place">
            <p>SC2/P2</p>
          </div>
          <div className="place">
            <p>NC2/P3</p>
          </div>
          <div className="place">
            <p>NC2/P4</p>
          </div>
          <div className="place">
            <p>SC2/P3</p>
          </div>
          <div className="place">
            <p>SC2/P4</p>
          </div>
          <div className="place">
            <p>NC1/P1</p>
          </div>
          <div className="place">
            <p>NC1/P2</p>
          </div>
          <div className="place">
            <p>SC1/P1</p>
          </div>
          <div className="place">
            <p>SC1/P2</p>
          </div>
          <div className="place">
            <p>NC1/P3</p>
          </div>
          <div className="place">
            <p>NC1/P4</p>
          </div>
          <div className="place">
            <p>SC1/P3</p>
          </div>
          <div className="place">
            <p>SC1/P4</p>
          </div>
          <div className="place">
            <p>E/P1</p>
          </div>
          <div className="place">
            <p>E/P2</p>
          </div>
          <div className="place">
            <p>E/P3</p>
          </div>
        </div>
      </Flex>
    </Box>
  );
};
