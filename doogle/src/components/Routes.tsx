import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const AppRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/video" element={<Results />} />
        <Route path="/" element={<Navigate replace to="/search" />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
