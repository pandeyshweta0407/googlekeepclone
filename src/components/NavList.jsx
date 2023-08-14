import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {LightbulbOutlined}  from '@mui/icons-material';
import {ArchiveOutlined  } from '@mui/icons-material';
import {DeleteOutlineOutlined } from '@mui/icons-material';
import {Link } from 'react-router-dom';
  

const NavBar = () => {
  const navList =[
    {id:"1", name:"Notes" , icon:<LightbulbOutlined/>    , route :'/'  },
    {id:"2", name:"Archive" , icon:  <ArchiveOutlined/>  , route :'/archive'  },
    {id:"3", name:"Trash" , icon:<DeleteOutlineOutlined/>, route :'/delete'  }
  ] 



  return (
    <List  >
      {
        navList.map(list => (
        <ListItem key={list.id }>
            <Link to={list.route} style={{textDecoration:'none', display:"flex" , color:"inherit"}} >
            <ListItemIcon  style={{alignItems : "center"}} >{list.icon}</ListItemIcon>
            <ListItemText primary={list.name}  />
            </Link>
           
        </ListItem>
      ))}
    </List>
  );
};

export default NavBar;
