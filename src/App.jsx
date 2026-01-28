import { Route, Routes, Navigate } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Product from "./pages/Product";
import Seo from "./pages/Seo";
import Corporate from "./pages/Corporate";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="prodotto" element={<Product />} />
        <Route path="seo" element={<Seo />} />
        <Route path="corporate" element={<Corporate />} />

        {/* alias old path */}
        <Route path="product" element={<Navigate to="/prodotto" replace />} />
      </Route>
    </Routes>
  );
}
