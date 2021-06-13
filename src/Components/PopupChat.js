import React, { Component } from "react";
import "./PopupChat.css";

function PopupChat(prop) {
     const { user ,data} = prop;
    
        // remove current user 
       
        const finalUsers = user.filter(item=>item.id !== data.id)
        
        const userGrid = finalUsers.map((user, index) => {
            return (
                <div key={index} style={{ height: "50px", marginTop: "10px", marginLeft: "10px" }}>
                        <div className="a_tag">
                        <img src={user.profilepicture} alt="User Avatar" style={{ width: "28px", height: "28px", float: "left", marginLeft: "10px", marginRight: "10px" }} /> 
                        <p onClick={()=>console.log(user)} style={{ color: "#545454", fontSize: "14px", textAlign: "left", padding: "5px" }}>{user.name}</p>
                    </div>   
                </div>
            )
        })
    
        return (
         
            <div className="chat__container">
                <div className="chat__mainbody">
                    <div className="chat__top">
                        <span className="chat__tile" style={{color: "white"}}>
                            <p>Chats</p>
                        </span>
                    </div>
                    <div className="chat__bottom">
                        <div className="chat__user__grid">
                            {userGrid}
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default PopupChat;
