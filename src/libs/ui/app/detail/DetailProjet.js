import { makeStyles, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import Seting from './Seting';
import Tache from './Tache';

function TabPanel(props) {
    const { children, value, index } = props;
    return <div>
        {
            value === index && (children)
        }
    </div>
}

const styles = makeStyles({
    div_tabs: {
        marginBottom: '50px'
    },
    indicatore: {
        backgroundColor: '#17A589',
        height: '1px'
    }
});

function DetailProjet(props) {
    const [value, setValue] = useState(0);
    const classes = styles();

    const handleChange = (e, val) => {
        console.log(val);
        setValue(val)
    }
    return (
        <div>
            <div className={classes.div_tabs}>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{
                    style: classes.indicatore
                }} >
                    <Tab label="Taches" />
                    <Tab label="Setings" />
                </Tabs>
            </div>
            <div>
                <TabPanel value={value} index={0}>
                    <Tache />
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <Seting />
                </TabPanel>
            </div>
        </div>
    );
}

export default DetailProjet;