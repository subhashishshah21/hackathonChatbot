import "./App.css";
import Login from "./Componenets/Login";
import Home from "./Componenets/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoState from "./context/InfoState";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <InfoState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login menu={true} />} />
          <Route path="/home" element={<Home menu={true} />} />
        </Routes>
      </BrowserRouter>
    </InfoState>
  );
}

export default App;
