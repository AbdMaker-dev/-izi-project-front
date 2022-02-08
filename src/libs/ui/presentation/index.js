import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, allUsers, selectUsers } from '../../core/redux/reducers/userReducer';
import userService from '../../core/servives/userService';
import colors from '../utils';
import Menu from './menu/Menu';
import socketIOClient from "socket.io-client";
import axios from "axios";
// const ENDPOINT = "http://localhost:3001";
const ENDPOINTHEB = "https://www.g-sports221.mixefruit.com";


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


const chunkSize = 10 * 1024;
function Presentation(props) {
    const classes = style();
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const [dropZoneActive, setDropZoneActive] = useState(false);
    const [files, setFiles] = useState([]);
    const [currentFilesIndex, setCurrentFilesIndex] = useState(null);
    const [lastUploadFilesIndex, setLastUploadFilesIndex] = useState(null);
    const [currentChunkIndex, setcurrentChunkIndex] = useState(null);

    useEffect(() => {
        // async function getUsers() {
        //     const data = await userService.getAllUsers();
        //     dispatch(allUsers(data.items))
        // }
        // function socketConnectig() {
        //     const socket = socketIOClient(ENDPOINTHEB, { transports: ['polling'] });
        //     socket.on("data", data => {
        //         const newUser = JSON.parse(data);
        //         dispatch(addUser(newUser));
        //     });
        // }
        // getUsers();
        // socketConnectig() dispatch

        if (files.length > 0) {
            if (currentFilesIndex === null) {
                setCurrentFilesIndex(lastUploadFilesIndex === null ? 0 : lastUploadFilesIndex + 1);
            }
        }
    }, [files.length]);

    useEffect(() => {
        if (currentFilesIndex !== null) {
            setcurrentChunkIndex(0);
        }
    }, [currentFilesIndex]);

    useEffect(() => {
        if (currentChunkIndex !== null) {
            readAndUploadCurrentChunkIndex();
        }
    }, [currentChunkIndex]);

    useState(() => {
        if (lastUploadFilesIndex === null) {
            return;
        }
        const isLastFile = lastUploadFilesIndex === files.length - 1;
        const nexFileIndex = isLastFile ? null : currentFilesIndex + 1;
        setCurrentFilesIndex(nexFileIndex);
    }, [lastUploadFilesIndex]);


    const readAndUploadCurrentChunkIndex = () => {
        const reader = new FileReader();
        const file = files[currentFilesIndex];
        if (!file) {
            return;
        }
        const from = currentChunkIndex * chunkSize;
        const to = from + chunkSize;
        const blob = file.slice(from, to);
        reader.onload = e => uploadChunk(e);
        reader.readAsDataURL(blob);
    }
    const uploadChunk = (e) => {
        const file = files[currentFilesIndex];
        const data = e.target.result;
        const params = new URLSearchParams();
        params.set('name', file.name);
        params.set('size', file.size);
        params.set('currentChunkIndex', currentChunkIndex);
        params.set('totalChunk', Math.ceil(file.size / chunkSize));
        const headers = {
            'Content-type': 'application/octet-stream'
        }
        axios.post('http://localhost:8080/upload?' + params.toString(), data, { headers })
            .then(response => {
                const filseSize = files[currentFilesIndex].size;
                const file = files[currentFilesIndex];
                const isLastChunk = currentChunkIndex === Math.ceil(filseSize / chunkSize) - 1;
                if (isLastChunk) {
                    file.finalFilename = response.data.finalFilename;
                    setLastUploadFilesIndex(currentFilesIndex);
                    setcurrentChunkIndex(null);
                } else {
                    setcurrentChunkIndex(currentFilesIndex + 1);
                }
            })
    }

    const handledrop = (e) => {
        e.preventDefault();
        setFiles([...files, ...e.dataTransfer.files]);
    }
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

            <div
                onDragOver={e => { setDropZoneActive(true); e.preventDefault(); }}
                onDragLeave={e => { setDropZoneActive(false); e.preventDefault(); }}
                onDrop={e => handledrop(e)}
                className={"drop-zone" + (dropZoneActive ? " active" : "")}>
                DROP YOUR FILES HERE
            </div>
            <div>
                {
                    files.map((file) =>
                        <div>
                            {
                                file.name
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Presentation;