import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../utils';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { Avatar } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        width: '240px',
        boxShadow: 'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'
    },
    paper: {
        background: "withe",
    },
    primary: {
        fontSize: '0.7em',
    },
    itemList: {
        "&:hover": {
            backgroundColor: colors.vr,
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        }
    },
    toolBar: {
        width: '100%',
        display: 'block',
        justifyContent: 'space-between',
        padding: '20px'
    }
});

function MyDrawer() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const drawer = (
        <div className={classes.root}>
            <Toolbar className={classes.toolBar}>
                <Avatar alt="Alioune Badara DIOUF" src="/static/images/avatar/1.jpg" />
                <span> Alioune Badara DIOUF</span>
            </Toolbar>
            <Divider />
            <List >
                <ListItem
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    classes={{ root: classes.itemList }}
                    button component={Link} underline="none" to="/app/mes-projets" autoFocus="true">
                    <ListItemIcon>
                        <FolderOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mes Projets" classes={{ primary: classes.primary }} />
                </ListItem>
                <Divider />
                <ListItem
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    classes={{ root: classes.itemList }}
                    button component={Link} underline="none" to="/app/partage-projets">
                    <ListItemIcon>
                        <ShareOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projets Partager" classes={{ primary: classes.primary }} />
                </ListItem>
                <Divider />
                <ListItem
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    classes={{ root: classes.itemList }}
                    button component={Link} underline="none" to="/app/profil">
                    <ListItemIcon>
                        <PermIdentityOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mon Profile" classes={{ primary: classes.primary }} />
                </ListItem>
                <Divider />
            </List>
        </div>
    );

    return (
        <Drawer variant="permanent" classes={{ paper: classes.paper, root: classes.root }}>
            {drawer}
        </ Drawer>
    );
}

export default MyDrawer;