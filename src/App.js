import "./App.css";
import Login from "./Componenets/Login";
import Home from "./Componenets/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login menu={true} />} />
        <Route path="/home" element={<Home menu={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
