import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { TbHome2 } from "react-icons/tb";
import { BiCabinet } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import "./WorkplaceHeadoffice.css";
import { useSelector } from "react-redux";
import {
  getWorkplacesFive,
  getWorkplacesRemote,
  getWorkplacesSix,
} from "../../redux/selectors";

export const WorkplaceHeadoffice = () => {
  const wpSix = useSelector(getWorkplacesSix);
  const wpFive = useSelector(getWorkplacesFive);
  const wpRemote = useSelector(getWorkplacesRemote);

  return (
    <Box>
      <Flex justifyContent="space-between" mb={4}>
        <Heading size="lg">Workplaces</Heading>
        <Flex gap="15px">
          <Button
            as="a"
            href="#sixFloor"
            variant="outline"
            gap="5px"
            _hover={{ bg: "main", color: "white" }}
          >
            <HiOutlineBuildingOffice2 size={25} />
            6.3
          </Button>
          <Button
            as="a"
            href="#fiveFloor"
            variant="outline"
            gap="5px"
            _hover={{ bg: "main", color: "white" }}
          >
            <HiOutlineBuildingOffice2 size={25} />
            5.2
          </Button>
          <Button
            as="a"
            href="#remote"
            variant="outline"
            gap="5px"
            _hover={{ bg: "main", color: "white" }}
          >
            <TbHome2 size={25} />
            REMOTE
          </Button>
          <Button
            as="a"
            href="#closets"
            variant="outline"
            gap="5px"
            _hover={{ bg: "main", color: "white" }}
          >
            <BiCabinet size={25} />
            CLOSETS
          </Button>
        </Flex>
      </Flex>
      <Heading size="md" textAlign="center" mb={4}>
        HEAD OFFICE
      </Heading>
      <Flex
        p={5}
        w="100%"
        borderRadius="12px"
        boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
        flexDirection="column"
      >
        <Box id="sixFloor" p={3}>
          <Text textAlign="center" fontSize="xl" fontWeight="bold">
            6.3
          </Text>
        </Box>

        <div className="container">
          {wpSix.map((wp) => {
            const { name, employee, employee_email, status } = wp;
            return (
              <Center
                key={name}
                className={`place ${name}`}
                flexDirection="column"
              >
                <Text fontWeight="bold">{name}</Text>
                {employee && <p>{employee}</p>}
              </Center>
            );
          })}
        </div>
      </Flex>
      <Flex
        p={5}
        w="100%"
        borderRadius="12px"
        boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
        flexDirection="column"
      >
        <Box p={3}>
          <Text
            id="fiveFloor"
            textAlign="center"
            fontSize="xl"
            fontWeight="bold"
          >
            5.2
          </Text>
        </Box>

        <div className="container">
          {wpFive.map((wp) => {
            const { name, employee, employee_email, status } = wp;
            return (
              <Center
                key={name}
                className={`place ${name}`}
                flexDirection="column"
              >
                <p>{name}</p>
                {employee && <p>{employee}</p>}
              </Center>
            );
          })}
        </div>
      </Flex>
      <Flex
        p={5}
        w="100%"
        borderRadius="12px"
        boxShadow="0px 0px 24px rgba(50, 59, 75, 0.15)"
        flexDirection="column"
      >
        <Box id="remote" p={3}>
          <Text textAlign="center" fontSize="xl" fontWeight="bold">
            REMOTE
          </Text>
        </Box>

        <Flex gap="20px" flexWrap="wrap" justifyContent="space-evenly">
          {wpRemote.map((wp) => {
            const { employee, employee_email, city, country, time } = wp;

            return (
              <Flex
                key={time}
                className={`place`}
                p={4}
                w="40%"
                justifyContent="space-between"
              >
                <Box>
                  <Text fontWeight="bold">{employee}</Text>
                  <Text>{employee_email}</Text>
                  <Text>Devices</Text>
                </Box>
                <Box>
                  <Text>{city}</Text>
                  <Text>{country}</Text>
                  <Text>Time zone: {time}</Text>
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};