import { FunctionComponent } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "containers/Home";

const NavRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default NavRoutes;
