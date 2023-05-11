import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Box } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box as="main" m="0 auto">
      <Header></Header>
    </Box>
  );
}

export default App;
