import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './style';

function Menu() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        IzI-ProJeTs
                    </Typography>
                    <Button href="/login" className={classes.bnt}>Login</Button>
                    <Button href="/login" className={classes.bnt}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Menu;