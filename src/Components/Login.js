import React, { useEffect, useState } from 'react'
import './Login.css'

import { Scrollbars } from 'react-custom-scrollbars';
import { Link} from 'react-router-dom';
function Login() {
   const [user, setuser] = useState([]) 
  
     useEffect(( )  => {
          fetch('https://panorbit.in/api/users.json')
          .then((result) => result.json())
          .then((data) => {
              setuser(data.users)
          })

     }, [])
     
    return (
        <main className='login'>
        <section className='container'>
               <h3>Select an  account</h3>
        <Scrollbars  style={{height:420, color:'grey'}} >

        {user.map((eachuser) => {
             return (
                <Link
                className="list-item"
                key={user.id}
                to={{
                    pathname:'/profile',
                    state:{data: eachuser,user:user}
                }}
              >
                <div className = 'person'>
                     <img className='person-img' src = {eachuser.profilepicture}  alt =''/>
                     <div  className='user'>{eachuser.name}</div>
                 </div>
                </Link>
             )
        })}
       
        </Scrollbars>
        </section>

        </main>
    )
}

export default Login
