import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProjet } from '../../core/redux/reducers/projetReducer';
import ButtonForm from './ButtonForm';
import InputText from './InputText';
import TextArea from './TextArea';

function AddProjet(props) {

    const [labelle, setLabelle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addProjet({ id: 1, libelle: labelle, description: description }))
    }
    const handleLabelleChange = (event) => {
        setLabelle(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    return (
        <div>
            <form>
                <h2>Créer Projet</h2>
                <InputText text="Libelle" value={labelle} onChange={handleLabelleChange} />
                <TextArea text="Description" value={description} onChange={handleDescriptionChange} />
                <ButtonForm text="Ajouter" onclick={handleSubmit} />
            </form>
        </div>
    );
}

export default AddProjet;