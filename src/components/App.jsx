import { MyDevices } from "../pages/My Devices/MyDevices";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { People } from "../pages/People/People";
import { Equipment } from "../pages/Equipment/Equipment";
import { Projects } from "../pages/Projects/Projects";
import { Workplace } from "../pages/Workplace/Workplace";
import { Delivery } from "../pages/Delivery/Delivery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MyDevices />} />
        <Route path="/people" element={<People />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workplace" element={<Workplace />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  );
}

export default App;
