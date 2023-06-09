import { Box, Heading } from "@chakra-ui/react";
import '../src/styles/global.css'
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./layouts/CreateEmployee";
import Wraper from "./components/Wraper";
import DashboardPage from "./layouts/DashboardPage";
import DeleteEmployee from "./layouts/DeleteEmployee";
function App() {
  return (
    <>

   <Routes>
    <Route path="/" element={<Wraper><Dashboard /></Wraper>} />
    <Route path="/createEmployee" element={<Wraper><CreateEmployee /></Wraper>} />
    <Route path="/dashboard" element={<Wraper><DashboardPage /></Wraper>} />
    <Route path="/deleteEmployee" element={<Wraper><DeleteEmployee /></Wraper>} />
   </Routes>
    </>
  );
}

export default App;
