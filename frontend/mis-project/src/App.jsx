import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import login from "./pages/login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard"
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
    <Route path="/login" element={<login />}></Route>
    <Route path="/admin-dashboard" element={
      <PrivateRoutes>
        <RoleBaseRoute requiredRole={["admin"]}>
        <AdminDashboard />
        </RoleBaseRoute>
      </PrivateRoutes>
    }></Route>
    <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
