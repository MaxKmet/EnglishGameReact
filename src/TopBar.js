import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const TopBar = ({ classes, text }) => (
      <AppBar position="relative">
        <Toolbar>         
          <Typography variant="h5" color="inherit" noWrap>
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
        
);

export default TopBar;