import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

//import Paper from "@material-ui/core/Paper";
//import {makeStyles} from "@material-ui/core";
const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="title" color="inherit">
                        My Navigation Bar

                        <MenuList>
                            <MenuItem>alsdjalsdj</MenuItem>
                            <MenuItem>alsdjalsdj</MenuItem>
                            <MenuItem>alsdjalsdj</MenuItem>
                        </MenuList>
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
}


export default NavBar;
