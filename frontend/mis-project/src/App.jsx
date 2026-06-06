import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard';
import Login from "./pages/login";
import Navibar from './Component/Navibar';
 
function App() {
  const title = 'Employee Management System';
  return (
    <>
    <Navibar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;