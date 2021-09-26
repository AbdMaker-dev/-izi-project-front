import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectAuth } from '../../../core/redux/reducers/authReducer';
import AuthService from '../../../core/servives/AuthService';
import { withRouter } from 'react-router';

function Menu(props) {

    const classes = useStyles();
    const islog = useSelector(selectAuth);
    const dispath = useDispatch();

    const handleLogout = () => {
        AuthService.logOut();
        dispath(logOut());
        props.history.push("/");
        window.location.reload();
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        IzI-ProJeTs
                    </Typography>
                    {
                        !islog ? <Button href="/login" className={classes.bnt}>Login</Button> :
                            <Button onClick={handleLogout.bind(this)} className={classes.bnt}>Logout</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Menu);