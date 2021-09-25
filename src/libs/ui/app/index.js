import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import PropTypes from 'prop-types';
import MesProjet from './mesProjet/MesProjet';
import PartageProjet from './partageProjet/PartageProjet';
import Profile from './profile/Profile';
import MyDrawer from '../components/MyDrawer';
import Menu from '../presentation/menu/Menu';


import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    main: {
        width: 'calc(100% - 240px)',
        backgroundColor: '#F8F9F9',
        padding: '30px',
    },
    content: {
        width: '90%',
        padding: '20px',
        margin: 'auto',
        marginTop: '30px',
        background: 'white',
        border: '2px solid #F7F9F9',
        borderRadius: '10px',
        boxShadow: 'box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
    }
}));

function Home(props) {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <MyDrawer />
            <div className={classes.main}>
                <Menu />
                <div className={classes.content}>
                    <Switch>
                        <Route exact path="/app/" component={MesProjet} />
                        <Route path="/app/mes-projets" component={MesProjet} />
                        <Route path="/app/profil" component={Profile} />
                        <Route path="/app/partage-projets" component={PartageProjet} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {
    window: PropTypes.func,
};

export default Home;