import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, ScorePage } from "./pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/score" element={<ScorePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
