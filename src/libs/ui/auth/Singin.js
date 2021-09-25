import { Button } from '@material-ui/core';
import React from 'react';
import ButtonForm from '../components/ButtonForm';
import InputPassword from '../components/InputPassword';
import InputText from '../components/InputText';
import useStyles from './style';

function Singin() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.div_left}>
                    <h1 className={classes.text}>Izi-Project</h1><p className={classes.text}>for the management of your projects</p>
                    <h2 className={classes.titre1}>To log in</h2>
                    <Button href="/login" variant="outlined" className={classes.bntStyle}>
                        LogIn
                    </Button>
                </div>
                <div className={classes.div_right}>
                    <form className={classes.form}>
                        <h2 className={classes.titre}>SingIn Form</h2>
                        <InputText text="Prenom" />
                        <InputText text="Nom" />
                        <InputText text="Email" />
                        <InputPassword />
                        <ButtonForm text="Singin" />
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Singin;