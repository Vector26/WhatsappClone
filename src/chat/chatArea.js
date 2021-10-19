import React from "react"
import "./Chat.css"

const Chat = (props)=>{
    var config={
        "0":"you",
        "1":"reciever"
    };
    return(
        <div className={"chatContainer"+config[props.type]}>
        <div className={""+config[props.type]}>
            <p>Google has created over 1,700 official Material icons, each in five different "themes" (see below). For each SVG icon, we export the respective React component from the</p>
        </div>
        </div>
    );
}

export default Chat;