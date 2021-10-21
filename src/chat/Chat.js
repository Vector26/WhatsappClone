import { IconButton } from "@mui/material";
import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import demo from "../contacts/tempMedia/demo.jpg";
import { Avatar, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import "./Chat.css";
import SendSharp from "@mui/icons-material/SendSharp";

function ContactInfo() {
  var timming = "12:34PM";
  return (
    <div className="contactActions">
      <div className="container">
        <Avatar src={demo} />
        <div className="content" style={{ marginLeft: "1em" }}>
          <h3>Name</h3>
          <h6>Last Seen:{timming}</h6>
        </div>
      </div>
      <div className="buttons">
        <IconButton size="large">
          <SearchIcon />
        </IconButton>
        <IconButton size="large">
          <AttachFileIcon />
        </IconButton>
        <IconButton size="large">
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
}

const Chat = (props) => {
  var config = {
    0: "you",
    1: "reciever",
  };
  return (
    <div className={"chatContainer" + config[props.type]}>
      <div className={"" + config[props.type]}>
        <p>
          Google has created over 1,700 official Material icons, each in five
          different "themes" (see below). For each SVG icon, we export the
          respective React component from the
        </p>
      </div>
    </div>
  );
};

function ChatArea() {
  return (
    <div className="chatAndCreate">
        <div className="ChatArea">
            <Chat type={0} />
            <Chat type={1} />
            <Chat type={1} />
            <Chat type={0} />
            <Chat type={0} />
            <Chat type={1} />
            <Chat type={1} />
        </div>
        <div className="createMsg">
            <Box sx={{backgroundColor:'white'}}>
                <TextField fullWidth
                label="Message"
                variant="outlined"
                 InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton size="large"><SendSharp/></IconButton>
                      </InputAdornment>
                    ),
                  }}
                 />
            </Box>
        </div>
    </div>
  );
}

function chat() {
  return (
    <div className="Chat">
      <ContactInfo />
      <ChatArea />
    </div>
  );
}

export default chat;
