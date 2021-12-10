import React, {useState, useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MailIcon from '@mui/icons-material/Mail';
import WcIcon from '@mui/icons-material/Wc';
import EventIcon from '@mui/icons-material/Event';
import Spinner from "./Spinner/Spinner";
import GoogleMap from './Map'


const UserDetails = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [userSpin, setUserSpin] = useState(true) 

     useEffect(() => {
       async function getCurrentUser(){
        const user = await JSON.parse(localStorage.getItem('user'))
        setCurrentUser(user);
         } 
         getCurrentUser()
          setTimeout(()=>{
           setUserSpin(false)
        }, 1000)
  }, [])

    return ( 
        <div>
        {userSpin ? (<div><Spinner/></div>) : 
        (
            <div>
        <h1 className="titles">User Details</h1>
        <div style={{  display: "flex", justifyContent: "center", alignItems: "center"}}>
             <img src={currentUser.picture.large} alt="imgUser"/>
        </div>
        <div style={{  display: "flex", justifyContent: "center", alignItems: "center"}}>
             <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
               <ListItem
                 disableGutters
                 secondaryAction={
                   <AccountBoxIcon>
                      <CommentIcon />
                    </AccountBoxIcon>
                    }>
          <ListItemText>
          Full Name: {currentUser.name.first.charAt(0)}. {currentUser.name.last}
          </ListItemText>
        </ListItem>
               <ListItem
                 disableGutters
                 secondaryAction={
                   <MailIcon>
                      <CommentIcon />
                    </MailIcon>
                    }>
          <ListItemText>
          <span style={{flexWrap: "wrap"}}>Email: {currentUser.email}</span>
          </ListItemText>
        </ListItem>
               <ListItem
                 disableGutters
                 secondaryAction={
                   <WcIcon>
                      <CommentIcon />
                    </WcIcon>
                    }>
          <ListItemText>
          Gender: {currentUser.gender}
          </ListItemText>
        </ListItem>
               <ListItem
                 disableGutters
                 secondaryAction={
                   <EventIcon>
                      <CommentIcon />
                    </EventIcon>
                    }>
          <ListItemText>
          Age: {currentUser.dob.age}
          </ListItemText>
        </ListItem>
             </List>
        </div>
        <GoogleMap />
        </div>
        ) }
        </div>
     );
}
 
export default UserDetails;

