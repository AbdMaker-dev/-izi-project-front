import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    root: {

    },
    table: {

    }
}));



function TableProjet(props) {
    const classes = style();
    return (
        <div className={classes.root}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>The table header</th>
                        <th>The table header</th>
                        <th>The table header</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>aaa</td>
                        <td>bbbb</td>
                        <td>ccc</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableProjet;