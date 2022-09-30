import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { AccountCircle } from '@material-ui/icons';



function Navbar(){
    return (
 
      <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box mx={1} style={{cursor: "pointer"}}>
            <Typography variant="h5">
            BlogPessoal
          </Typography>
          </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
            home
          </Typography>
          </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
            postagens
          </Typography>
          </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
            temas
          </Typography>
          </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
            cadastrar temas
          </Typography>
          </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
            <Typography variant="h6">
            logout
          </Typography>
          </Box>
              </Toolbar>
      </AppBar>
        </>

    )
}


export default Navbar;