import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import './Profile.css'
import UserProfile from './UserProfile'
function Profile(prop) {
    
    return (
        <div className='profile-sidebar'>
        <Sidebar />
        <div className='profile-header'>
         
         <UserProfile prop={prop.location.state}  ></UserProfile>
         </div>
        </div>
    )
}

export default Profile
