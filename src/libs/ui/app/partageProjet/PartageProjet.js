import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allProjet } from '../../../core/redux/reducers/projetReducer';
import ProjetService from '../../../core/servives/ProjetService';
import TableProjet from '../../components/TableProjet';

function PartageProjet(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        async function getProjets() {
            const data = await ProjetService.getAllSharedProjet();
            console.log(data);
            dispatch(allProjet(data))
        }
        getProjets();
    }, [dispatch]);

    return (
        <div>
            <TableProjet />
        </div>
    );
}

export default PartageProjet;