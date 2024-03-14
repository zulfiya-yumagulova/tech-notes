import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Public from "./Components/Public.jsx";
import Login from "./features/auth/Login.jsx";
import DashLayout from "./Components/DashLayout.jsx";
import Welcome from "./features/auth/Welcome.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
