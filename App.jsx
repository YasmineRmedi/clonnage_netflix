import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Netflix from "./Netflix";
import Login from "./Login";
function App() {
  return (
    /*<BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/Netflix" element={<Netflix />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>*/
    <Netflix />
  );
}

export default App;
