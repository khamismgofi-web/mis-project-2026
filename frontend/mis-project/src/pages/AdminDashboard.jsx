import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const {user} = useAuth()
    return(
        <div className='flex'>
            <AdminSidebar />
            <div className='flex-1 ml-64 bg-gray-100 h-screen'>
                <Navibar/>
            </div>
        </div>
    )
}

export default AdminDashboard