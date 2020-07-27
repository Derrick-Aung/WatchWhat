import React, { useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import styles from "./NewHeader.module.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
    Drawer,
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    Divider,
    List,
    InputBase,
    ListItem,
    IconButton,
    Menu,
} from "@material-ui/core";
import { DrawerItem, TypeAhead } from "../index";
import genres from "./Genres";
import { useSelector, useDispatch } from "react-redux";
import { setDrawerState } from "../../redux/actions";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "rgb(20, 20, 20, 0.9)",
        justifyContent: "space-between",
        flexDirection: "row",
        color: "#bb86fc",
        borderBottom: "solid 1px rgb(148, 148, 148)",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#202020",
        borderRight: "solid 1px rgb(148, 148, 148)",
        color: "#bb86fc",
    },
    drawerContainer: {
        overflow: "auto",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
    divider: {
        background: "rgb(148, 148, 148)",
    },
}));

export default function NewHeader() {
    const isMobileorTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const classes = useStyles();
    const drawerOpen = useSelector((state) => state.drawerOpen);
    const dispatch = useDispatch();

    const drawerItems = genres.map((genre) => <DrawerItem text={genre.name} />);

    const primaryLinks = (
        <Toolbar className={styles.navSubContainer}>
            <Typography variant="h6" noWrap>
                <NavLink to="/trending" className={styles.navBrand}>
                    TRENDING
                </NavLink>
            </Typography>
            <Typography variant="h6" noWrap>
                <NavLink to="/upcoming" className={styles.navBrand}>
                    UPCOMING
                </NavLink>
            </Typography>
            <Toolbar>
                <TypeAhead />
            </Toolbar>
        </Toolbar>
    );

    const primaryDrawerLinks = (
        <div>
            <ListItem>
                <Toolbar>
                    <TypeAhead />
                </Toolbar>
            </ListItem>
            <ListItem>
                <Typography variant="h6" noWrap>
                    <NavLink to="/trending" className={styles.navBrand}>
                        TRENDING
                    </NavLink>
                </Typography>
            </ListItem>
            <ListItem>
                <Typography variant="h6" noWrap>
                    <NavLink to="/upcoming" className={styles.navBrand}>
                        UPCOMING
                    </NavLink>
                </Typography>
            </ListItem>
            <Divider classes={{ root: classes.divider }} />
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => dispatch(setDrawerState(!drawerOpen))}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            drawerOpen && classes.hide
                        )}
                    >
                        <MenuIcon className={styles.menuIcon} />
                    </IconButton>
                    <Typography variant="h4" noWrap>
                        <NavLink to="/" className={styles.navBrand}>
                            WatchWhat
                        </NavLink>
                    </Typography>
                </Toolbar>
                {!isMobileorTablet && primaryLinks}
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                open={drawerOpen}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    {isMobileorTablet && primaryDrawerLinks}

                    <List>{drawerItems}</List>
                </div>
            </Drawer>
        </div>
    );
}
