import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../utils';
import { useSelector } from 'react-redux';
import { selectProjets } from '../../core/redux/reducers/projetReducer';

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



function TableProjet(props) {
    const classes = style();
    const projets = useSelector(selectProjets)

    return (
        <div className={classes.root}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>Libelle</th>
                        <th className={classes.th}>Date Creation</th>
                        <th className={classes.th}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projets.map((elt) => (
                            <tr className={classes.tr} key={elt.id}>
                                <td className={classes.td}>{elt.libelle}</td>
                                <td className={classes.td}>{
                                    new Date(elt.dateCreation).toLocaleDateString()}</td>
                                <td className={classes.td}>Open</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableProjet;