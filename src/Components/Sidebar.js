import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
     const [active, setActive] = useState(false)
     
    
    return (
     
     
        <div class =" container1">{active}
       
         <div class ='sider'>
         
            
           <Link className='sidebar-item'  >
           <div className = 'text' onClick = {() =>setActive(true)}>Profile</div>
           </Link>
           <div className = 'underline'></div>

           <Link className='sidebar-item' >
           <div className = 'text' onClick = {() =>setActive(true)}>Posts</div>
           </Link>
           <div className = 'underline'></div>

           <Link className='sidebar-item'>
           <div className = 'text' onClick = {() =>setActive(true)}>Gallery</div>
           </Link>
           <div className = 'underline'></div>

           <Link className='sidebar-item'>
           <div className = 'text' onClick = {() =>setActive(true)}>To Do</div>
           </Link>
           <div className = 'underline'></div>
            </div>
           </div>
          
        
    )
}

export default Sidebar
