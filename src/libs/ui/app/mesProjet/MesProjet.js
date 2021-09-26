import React, { useEffect, useState } from 'react';
import TableProjet from '../../components/TableProjet';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button, Divider } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { allProjet } from '../../../core/redux/reducers/projetReducer';
import ProjetService from '../../../core/servives/ProjetService';
import AddProjet from '../../components/AddProjet';

const style = makeStyles((theme) => ({
    root: {
        marginBottom: '50px',
        display: 'block',
    },
    divBtn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'right'
    },
    addForm: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    btn: {
        background: '#3498DB',
        marginBottom: '20px',
        '&:hover': {
            backgroundColor: '#3498DB',
        }
    }
}));

function MesProjet(props) {
    const classes = style();
    const [showForm, setShowForm] = useState(false);

    const dispatch = useDispatch();

    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    useEffect(() => {
        async function getProjets() {
            const data = await ProjetService.getAllProjet();
            console.log(data);
            dispatch(allProjet(data))
        }
        getProjets();
    }, [dispatch]);

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.divBtn}>
                    <Button onClick={handleShowForm} variant="contained" className={classes.btn} startIcon={<FontAwesomeIcon color={'white'} icon={showForm ? faMinus : faPlus} />}>
                        Créer Projet
                    </Button>
                </div>
                {showForm && (<div className={classes.addForm}>
                    <AddProjet />
                    <br />
                    <br />
                </div>)}
                <Divider />
            </div>
            <TableProjet />
        </div>
    );
}

export default MesProjet;