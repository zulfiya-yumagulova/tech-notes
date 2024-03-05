import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Public from "./Components/Public.jsx";
import Login from "./Components/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
