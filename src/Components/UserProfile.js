
import React, { useEffect, useRef, useState } from 'react'
import PopupChat  from './PopupChat';
import ProfileHeader from './ProfileHeader';
import './Userprofile.css'



function UserProfile(prop) {
 
   const {user ,data} = prop.prop;
   const [userData,setUserData] = useState(data);
   const [click , setClick] = useState(false)
 
   const dropdownref = useRef(null)
  //  const handleClick = () => setClick(!click)
  const handleClick = () => setClick(!click)
  
const handleUser = (user_data) => {
  
  if(user_data){
    console.log(user_data)
    console.log(user)
    setUserData(user_data)
  }
}
    // setUserData(user_data)
  

 

  return (
    <>
     <div>
       <ProfileHeader data={userData} user={user} handleUser={handleUser} ></ProfileHeader>
       </div>
    <div style={{ display: 'flex' }}>
      <div className="profile-det-cont">
          <div className="profile-image">
            <img src={userData.profilepicture} alt="profile pic" />
          </div>
          <div>
            <strong>{userData.name}</strong>
          </div>
          <div className="det-item">
            <div className="label">Username : </div>
            <div className="value"> {userData.username}</div>
          </div>
          <div className="det-item">
            <div className="label">E-mail : </div>
            <div className="value"> {userData.email}</div>
          </div>
          <div className="det-item">
            <div className="label">Phone : </div>
            <div className="value"> {userData.phone}</div>
          </div>
          <div className="det-item">
            <div className="label">Website : </div>
            <div className="value"> {userData.website}</div>
          </div>

          <div className="det-item border-top">
            <div className="label">Company </div>
          </div>

          <div className="det-item">
            <div className="label">Name : </div>
            <div className="value">
              {data.company && data.company.name}
            </div>
          </div>
          <div className="det-item">
            <div className="label">catchPhrase : </div>
            <div className="value">
              {data.company && data.company.catchPhrase}
            </div>
          </div>
          <div className="det-item">
            <div className="label">bs : </div>
            <div className="value">
              {data.company && data.company.bs}
            </div>
          </div>
        </div>
        <div className="profile-map-cont ">
          <div className="profile-det-cont">
            <div className="det-item ">
              <div className="label">Address </div>
              <div className="value"></div>
            </div>
            <div className="det-item">
              <div className="label">Street : </div>
              <div className="value">
                {userData.address && userData.address.street}
              </div>
            </div>
            <div className="det-item">
              <div className="label">Suite : </div>
              <div className="value">
                {userData.address && userData.address.suite}
              </div>
            </div>
            <div className="det-item">
              <div className="label">City : </div>
              <div className="value">
                {userData.phone && userData.address.city}
              </div>
            </div>
            <div className="det-item">
              <div className="label">Zipcode : </div>
              <div className="value">
                {userData.address && userData.address.zipcode}
              </div>
            </div>
          </div> 
         

        
       </div>
      </div>
       {/* <MapComponent /> */}
       <div onClick={handleClick} className="chat__box">
       <nav ref={dropdownref} className={`chat_box-menu ${click ? 'active' : 'inactive'}`}>
       <PopupChat data={userData} user={user}/>
       </nav>
       </div>
      </>
  )
}

export default UserProfile

