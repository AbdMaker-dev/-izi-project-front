import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import useCoponentsStyles from './componentstyle';

function ButtonForm(props) {
    const classes = useCoponentsStyles();
    return (
        <Fragment>
            <Button variant="contained" onClick={props.onclick} disableElevation className={classes.bntStyle}>
                LogIn
            </Button>
        </Fragment>
    );
}

export default ButtonForm;