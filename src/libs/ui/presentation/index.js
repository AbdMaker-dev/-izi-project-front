import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, allUsers, selectUsers } from '../../core/redux/reducers/userReducer';
import userService from '../../core/servives/userService';
import colors from '../utils';
import Menu from './menu/Menu';
import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://localhost:3001";
const ENDPOINTHEB = "https://www.g-sports221.mixefruit.com"

const style = makeStyles((theme) => ({
    root: {

    },
    table: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        borderCollapse: 'collapse',
        width: '100%',
    },
    th: {
        paddingTop: '12px',
        paddingBottom: '12px',
        textAlign: 'left',
        backgroundColor: colors.vr,
        border: '1px solid #ddd',
        color: 'white',
        padding: '8px',
    },
    tr: {
        '&:hover': {
            backgroundColor: '#f2f3f4'
        },
        border: '1px solid #f2f3f4',
        height: '50px',
        padding: '8px'
    },
    td: {
        padding: '8px',
        fontSize: '0.8em'
    }
}));

function Presentation(props) {
    const classes = style();
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    useEffect(() => {
        async function getUsers() {
            const data = await userService.getAllUsers();
            dispatch(allUsers(data.items))
        }
        function socketConnectig() {
            const socket = socketIOClient(ENDPOINTHEB, { transports: ['polling'] });
            socket.on("data", data => {
                const newUser = JSON.parse(data);
                dispatch(addUser(newUser));
            });
        }
        getUsers();
        socketConnectig()
    }, [dispatch]);

    return (
        <div>
            <Menu />
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>Prenom</th>
                        <th className={classes.th}>Nom</th>
                        <th className={classes.th}>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((elt) => (
                            <tr className={classes.tr} key={elt.id}>
                                <td className={classes.td} >{elt.prenom}</td>
                                <td className={classes.td}>{elt.nom}</td>
                                <td className={classes.td}>{elt.role.libelle}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default Presentation;