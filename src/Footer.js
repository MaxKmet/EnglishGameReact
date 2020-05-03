import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = ({ classes, text }) => (
    <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {text}
        </Typography>       
      </footer>
);

export default Footer;