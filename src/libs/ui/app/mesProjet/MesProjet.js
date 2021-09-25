import React from 'react';
import TableProjet from '../../components/TableProjet';
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MesProjet(props) {
    return (
        <div>
            <div>

                <Button variant="contained" startIcon={<FontAwesomeIcon icon={faInfo} />}>
                    Example
                </Button>
            </div>
            <TableProjet />
        </div>
    );
}

export default MesProjet;