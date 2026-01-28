import { Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Product from "./pages/Product";
import Seo from "./pages/Seo";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/product" element={<Product />} />
        <Route path="/seo" element={<Seo />} />
      </Routes>
    </SiteLayout>
  );
}
