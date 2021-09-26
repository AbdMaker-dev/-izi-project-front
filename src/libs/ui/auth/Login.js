import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import AuthService from '../../core/servives/AuthService';
import ButtonForm from '../components/ButtonForm';
import InputPassword from '../components/InputPassword';
import InputText from '../components/InputText';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { logIn } from '../../core/redux/reducers/authReducer';
import { Alert } from '@material-ui/lab';


function Login(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [errorLog, setErrorLog] = useState(false);
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleClick = async () => {
        const { token, bad } = await AuthService.login(email, password);
        if (bad) {
            setErrorLog(true);
            return;
        }
        if (token) {
            dispatch(logIn());
            props.history.push("/app");
        }
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.div_left}>
                    <h1 className={classes.text}>Izi-Project</h1><p className={classes.text}>for the management of your projects</p>
                    <h2 className={classes.titre1}>Create account</h2>
                    <Button href="/singin" variant="outlined" className={classes.bntStyle}>
                        Sing In
                    </Button>
                </div>
                <div className={classes.div_right}>
                    <form className={classes.form}>
                        {
                            errorLog && (<Alert severity="error">Email ou Password incorrect!</Alert>)
                        }
                        <h2 className={classes.titre}>Login Form</h2>
                        <InputText text="Email" value={email} onChange={handleEmailChange} />
                        <InputPassword value={password} onChange={handlePasswordChange} />
                        <ButtonForm text="Login" onclick={handleClick} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;