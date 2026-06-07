import React from 'react'
import { useAuth } from '../../context/authContext'

const Navibar = () => {
  const {user} = useAuth()
  return (
    <div className='flex justify-between h-12 bg-teal-500'>
      <p>Welcome {user.name}</p>
      <button>Logout</button>
    </div>
  )
}

export default Navibar