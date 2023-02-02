import "./App.css";
import Login from "./pages/Login/Login";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Otp from "./pages/Otp/Otp";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
