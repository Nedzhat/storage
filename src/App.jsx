import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Box } from "@chakra-ui/react";
import { MyDevices } from "./pages/My Devices/MyDevices";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box as="main" display="flex">
      <Header />
      <MyDevices />
      <Sidebar />
    </Box>
  );
}

export default App;
