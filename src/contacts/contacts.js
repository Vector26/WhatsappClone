import * as React from 'react';
import ReactDOM from 'react-dom';
import "./contacts.css";
import IconButton from '@mui/material/IconButton';
import { List ,ListItem,ListItemButton} from '@mui/material';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import demo from "./tempMedia/demo.jpg"
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { Avatar, Paper } from '@mui/material';


function ContactInfo() {
    return (
        <div class="contactInfo">
            <Avatar src={demo} />
            <div className="buttons">
            <IconButton size="large"><DataUsageIcon/></IconButton>
            <IconButton size="large"><AddIcon/></IconButton>
            <IconButton size="large"><MoreHorizIcon/></IconButton>
            </div>
        </div>
    );
}



function ContactsList() {
    return (
        <Paper style={{maxHeight: "74vh", overflow: 'auto',marginTop:"1em"}}>
            <List component="nav" aria-label="secondary mailbox folder">
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                
            </List>
        </Paper>
    )
}

function ContactCard() {
    return (
        <ListItemButton>
        <div>
                <div class="container">
                    <Avatar src={demo}/>
                    <div className="content">
                        <h3>Name</h3>
                        <h6>Hello how are you</h6>
                    </div>
                </div>
        </div>
        </ListItemButton>
    )
}


function SearchBox(){
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' ,backgroundColor:'white'}}>
                <TextField fullWidth
                variant="outlined"
                 InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton size="large"><SearchIcon/></IconButton>
                      </InputAdornment>
                    ),
                  }}
                 />
            </Box>
        </div>
    );
}

function SCLContainer() {
    return (
        <div class="SCLContainer"> 
            <SearchBox/>
            <ContactsList/>
        </div>
    )
}


function contacts() {
    return (
        <div className="contacts">
            <ContactInfo/>
            <SCLContainer/>
        </div>
    )
}

export default contacts;
