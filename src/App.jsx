import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./components/ProductPage";
import ProductsListing from "./components/ProductsListing";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsListing />} />
        <Route path="/product/:productID" element={<ProductPage />} />
        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
