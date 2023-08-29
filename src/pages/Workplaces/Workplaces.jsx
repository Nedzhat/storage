import { Box } from "@chakra-ui/react";
import { WorkplaceHeadoffice } from "../../components/WorkplaceHeadoffice/WorkplaceHeadoffice";

const Workplaces = () => {
  return (
    <Box as="section" w="60%" bg="bgColor" p={8} minH="100vh" h="auto">
      <WorkplaceHeadoffice />
    </Box>
  );
};

export default Workplaces;

// import { StlViewer } from "react-stl-viewer";
// const url = "../../../sharp2.stl";

// const style = {
//   // enabled: "true",
//   top: 0,
//   left: 0,
//   width: "600px",
//   height: "600px",
// };

// const modelProps = {
//   color: "red",
// };

{
  /* <StlViewer
        style={style}
        modelProps={modelProps}
        orbitControls
        shadows
        url={url}
      /> */
}
