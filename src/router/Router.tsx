import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, NotFound, Food, Tv, Massage } from "../components/pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Food />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/personal/massage" element={<Massage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
