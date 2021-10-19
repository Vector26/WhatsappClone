import { IconButton } from '@mui/material'
import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import demo from "../contacts/tempMedia/demo.jpg"
import { Avatar, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./Chat.css"
import Chat from './chatArea';


function ContactInfo() {
    var timming="12:34PM";
    return (
        <div class="contactActions">
            <div className="container">
            <Avatar src={demo} />
            <div className="content" style={{marginLeft:"1em"}}>
                        <h3>Name</h3>
                        <h6>Last Seen:{timming}</h6>
                </div>
            </div>
            <div className="buttons">
            <IconButton size="large"><SearchIcon/></IconButton>
            <IconButton size="large"><AttachFileIcon/></IconButton>
            <IconButton size="large"><MoreHorizIcon/></IconButton>
            </div>
        </div>
    );
}

function ChatArea() {
   var messages =
  [{
        "type" : 0,
        "image": "cat.jpg",
        "text": "Hello! Good Morning!"
    }, {
        "type": 1,
        "image": "dog.jpg",
        "text": "Hello! Good Afternoon!"
    }];
    return (
        <div className="ChatArea">
            <Chat type={0}/>
            <Chat type={0}/>
            <Chat type={1}/>
        </div>
    )
}


function chat() {
    return (
        <div className="Chat">
        <ContactInfo/>
        <ChatArea/>
        </div>
    )
}

export default chat
