import React from 'react'
import ProfileHeader from './ProfileHeader'
import UserProfile from './UserProfile'
import Sidebar from './Sidebar'
import { useHistory } from 'react-router'
function Profile1() {
    
    let userData = useHistory().location.state.data
    return (
        <div className='profile-sidebar'>
        <Sidebar/>
        <div className='profile-header'>
         <ProfileHeader/>  
         <UserProfile prop={userData}></UserProfile>
         </div>
        </div>
    )
}

export default Profile1
