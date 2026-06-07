import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaTachometerAlt, FaBuilding, FaUsers, FaCalendarAlt, FaMoneyBillWave} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
      <div className='text-2xl text-center font-poppins'>
        <h3 className='text-2xl text-center font-poppins'> Employee MS</h3>
      </div>
      <div className='px-4'>
        <Navlink to="/adim-dashboard" className={({isActive}) => '${isActive ? "bg-teal-500" : ""}flex items-center space-x-4 block py-2.5 px-4 rounded>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Navlink>
        <Navlink to="/adim-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
          <FaUsers />
          <span>Employee</span>
        </Navlink>
        <Navlink to="/adim-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
          <FaBuilding />
          <span>Department</span>
              </Navlink>
              <NavLink to="admin-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaCalendarAlt />
                <span>Leave</span>
              </NavLink>
              <NavLink to="/admin-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
              <FaMoneyBillWave />
              </NavLink>
      </div>
    </div>
  )
}

export default AdminSidebar
