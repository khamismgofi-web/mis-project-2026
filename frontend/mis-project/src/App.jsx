import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Welcome from './pages/Welcome'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard.jsx'
import Employees from './pages/Employees'
import Departments from './pages/Departments'
import Attendance from './pages/Attendance'
import Reports from './pages/Reports'
import PrivateRoutes from './utils/PrivateRoutes'
import RoleBaseRoute from './utils/RoleBaseRoutes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoute requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoute>
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/employees"
          element={
            <PrivateRoutes>
              <RoleBaseRoute requiredRole={["admin"]}>
                <Employees />
              </RoleBaseRoute>
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/departments"
          element={
            <PrivateRoutes>
              <RoleBaseRoute requiredRole={["admin"]}>
                <Departments />
              </RoleBaseRoute>
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/attendance"
          element={
            <PrivateRoutes>
              <RoleBaseRoute requiredRole={["admin"]}>
                <Attendance />
              </RoleBaseRoute>
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <PrivateRoutes>
              <RoleBaseRoute requiredRole={["admin"]}>
                <Reports />
              </RoleBaseRoute>
            </PrivateRoutes>
          }
        />
        <Route
          path="/employee-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoute requiredRole={["employee", "admin"]}>
                <EmployeeDashboard />
              </RoleBaseRoute>
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
