import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import './ProfileHeader.css'
function ProfileHeader(prop) {
  const {data, user ,handleUser} = prop;
 
  const [click , setClick] = useState(false)
 
  const dropdownref = useRef(null)
  const handleClick = () => setClick(!click)
 
  
   
    return (
      <div className="menu-container">
      <div className='menu-name'>
         Profile
      </div>
      <button onClick={handleClick} className="menu-trigger">
        <img src={data.profilepicture} alt="User avatar" />
        <span>{prop.data.name}</span>
      </button>
      <nav ref={dropdownref} className={`menu ${click ? 'active' : 'inactive'}`}>
     
      <div className="mainbody">
        <div className="mainbody__avatar">
          <img src={data.profilepicture} alt="Avatar" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
        </div>
        <div className="mainbody__name">
          <span className="mainbody__name__text">{data.name}</span>
        </div>
        <div className="mainbody__email">{data.email}</div>
        <hr style={{borderTop: "1px solid #d3d4d8", width: "200px", marginLeft: "50px"}}/>
        <div className="mainbody__friend1" onClick={()=>handleUser(user[data.id+0])}>
          <img src={user[data.id+0].profilepicture} alt="Avatar" style={{ width: "30px", height: "30px", marginTop:"5px" }} />
          &nbsp;&nbsp;
          <div className="mainbody__div1">{user[data.id+0].name}</div>
        </div>
        <hr style={{borderTop: "1px solid #d3d4d8", width: "200px", marginLeft: "50px"}}/>
        <div className="mainbody__friend2" onClick={()=>handleUser(user[data.id+0])}>
          <img src={user[data.id+1].profilepicture} alt="Avatar" style={{ width: "30px", height: "30px", marginTop:"5px" }} />
          &nbsp;&nbsp;
          <div className="mainbody__div2">{user[data.id+1].name}</div>
        </div>
        <div className="mainbody__signout">
          <div className="mainbody__button">
            <Link to="/" style={{ textDecoration: "none" }}>
              Signout
            </Link>
          </div>
        </div>
      </div>
     
        </nav>
      </div>
      
    )
}

export default ProfileHeader
