import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import useCoponentsStyles from './componentstyle';

function InputText(props) {
    const classes = useCoponentsStyles();
    return (
        <Fragment>
            <TextField className={classes.inpt}
                id="outlined-textarea"
                label={props.text}
                placeholder={props.text}
                multiline
                variant="outlined"
                value={props.value}
                onChange={props.onChange}
                InputLabelProps={{
                    className: classes.cssLabel
                }}
            />
        </Fragment>
    );
}

export default InputText;