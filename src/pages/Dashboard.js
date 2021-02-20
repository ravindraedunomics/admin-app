import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TableChartIcon from '@material-ui/icons/TableChart';
import AppsIcon from '@material-ui/icons/Apps';
import RoomIcon from '@material-ui/icons/Room';
import NotificationsIcon from '@material-ui/icons/Notifications';

// Load Fragment
import HomeFragment from "../Fragments/HomeFragment";
import UserProfile from "../Fragments/UserProfile";
import TableFragment from "../Fragments/TableFragment";
import IconFragment from "../Fragments/IconFragment";
import MapFragment from "../Fragments/MapFragment";
import NotificationFragment from "../Fragments/NotificationFragment";

import Navbar from "../components/Navbar"

import { img } from "../assets/img/sidebar-2.jpg";



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function ClippedDrawer() {
    const classes = useStyles();
    const [fragment, setFragment] = useState("HOME");

    const loadFragment = () => {
        switch (fragment) {
            case "HOME":
                return <HomeFragment />
            case "USER_PROFILE":
                return <UserProfile />
            case "TABLE_LIST":
                return <TableFragment />
            case "ICONS":
                return <IconFragment />
            case "MAP":
                return <MapFragment />
            case "NOTIFICATION":
                return <NotificationFragment/>
            default:
                break;
        }
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Navbar/>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer} style={{ 
      backgroundImage: `<img src"../assets/img/sidebar-2.jpg" >` 
    }}>
                    <List>

                        <ListItem button onClick={e => setFragment("HOME")} >
                            <ListItemIcon> <DashboardIcon /> </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>

                    </List>
                    <Divider />
                    <List>
                        <ListItem button onClick={e => setFragment("USER_PROFILE")} >
                            <ListItemIcon> <AccountCircleIcon /> </ListItemIcon>
                            <ListItemText primary="User Profile" />
                        </ListItem>
                        <ListItem button onClick={e => setFragment("TABLE_LIST")} >
                            <ListItemIcon> <TableChartIcon /> </ListItemIcon>
                            <ListItemText primary="Table List" />
                        </ListItem>
                        <ListItem button onClick={e => setFragment("ICONS")} >
                            <ListItemIcon> <AppsIcon /> </ListItemIcon>
                            <ListItemText primary="Icons" />
                        </ListItem>
                        <ListItem button onClick={e => setFragment("MAP")} >
                            <ListItemIcon> <RoomIcon /> </ListItemIcon>
                            <ListItemText primary="Map" />
                        </ListItem>
                        <ListItem button onClick={e => setFragment("NOTIFICATION")} >
                            <ListItemIcon> <NotificationsIcon /> </ListItemIcon>
                            <ListItemText primary="Notification" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {loadFragment(fragment)}
            </main>
        </div>
    );
}
