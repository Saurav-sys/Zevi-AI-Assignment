import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
