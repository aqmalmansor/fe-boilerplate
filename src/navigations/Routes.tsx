import { FunctionComponent } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "containers/Home";
import PlaygroundPage from "containers/Playground";

const NavRoutes: FunctionComponent = () => {
  const enableTest = true;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {enableTest && <Route path="/pg" element={<PlaygroundPage />} />}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default NavRoutes;
