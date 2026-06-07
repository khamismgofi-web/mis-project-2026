import React from 'react'

const RoleBaseRoutes = ({children, requiredRole}) => {
        const {user, loading} = useAuth()

        if (loading) {
            <div>Loading....</div>
        }

        if (!requiredRole.includes(user.role)){
            <Navigate to="/unauthorized" />
        }
        if(!user){
            return user ? children : <Navigate to="/login"/>
        }
    
    
}