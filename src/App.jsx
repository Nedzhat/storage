import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Box } from "@chakra-ui/react";
import { MyDevices } from "./pages/My Devices/MyDevices";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box as="main" display="flex">
      <Header></Header>
      <MyDevices></MyDevices>
    </Box>
  );
}

export default App;
