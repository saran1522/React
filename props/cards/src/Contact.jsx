import React from "react";

//props(properties) is an argumatn for the below function and props is an Object which has key and values as we have passed when calling the contact componant and we can use this as JavaScript Object in {}
export default function(props){
    return(
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="https://img.icons8.com/ios-filled/512/iphone14-pro.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="https://img.icons8.com/material-sharp/512/mail-account.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}