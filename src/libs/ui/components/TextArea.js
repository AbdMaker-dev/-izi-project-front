import { TextField } from '@material-ui/core';
import React, { Fragment } from 'react';
import useCoponentsStyles from './componentstyle';

function TextArea(props) {
    const classes = useCoponentsStyles();
    return (
        <Fragment>
            <TextField
                className={classes.inptArea}
                id="outlined-textarea"
                label={props.text}
                multiline
                rows={4}
                value={props.value}
                onChange={props.onChange}
                variant="outlined"
                InputLabelProps={{
                    className: classes.cssLabel
                }}
            />
        </Fragment>
    );
}

export default TextArea;