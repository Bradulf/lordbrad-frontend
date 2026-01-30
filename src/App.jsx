import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Assistant from "./pages/Assistant";

import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assistant" element={<Assistant />} />
      </Routes>
    </>
  );
}

export default App;
