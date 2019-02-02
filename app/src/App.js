import React, {Component} from 'react';
import Routes from './routes/Routes.js'
import {Link, withRouter} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";

import AdminPage from "./admin/AdminPage";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {main_theme} from "./Theme";
import {sidebar_items} from "./Dummy";
import Typography from "@material-ui/core/Typography/Typography";
import logo from './assets/logo.png'


let sidebarW = 25;
let contentW = 100 - sidebarW;

const styles = ({
    root: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "stretch",
        alignContent: "stretch",
        minHeight: '100vh'
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        width: sidebarW + 'vw',
        position: 'fixed',
        height: '100vh',
        backgroundColor: main_theme.palette.primary.light,
    },
    sidebarItem: {
        fontSize: '3vw',
        color: main_theme.palette.primary.contrastText,
        fontFamily: main_theme.palette.typography.fontFamily,
        '&:hover': {
            color: main_theme.palette.primary.main,
            cursor: 'pointer'
        }
    },
    image: {
        width: '15vw',
        height: '15vw'
    },
    content: {
        marginLeft: sidebarW + 'vw',
        width: contentW + 'vw',
        backgroundColor: main_theme.palette.primary.light
    }
});


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isAdmin: true
        }
    }

    auth = () => {
        this.setState({
            isAdmin: true
        })
    }

    render() {


        const {classes} = this.props

        const cProps = {
            auth: this.auth
        }

        return (
            <>
                {this.state.isAdmin ?
                    <AdminPage/>
                    :
                    <MuiThemeProvider theme={main_theme}>
                        <div className={classes.root}>
                            <div className={classes.sidebar}>
                                <Link to={"/"}>
                                    <img className={classes.image} src={logo}/>
                                </Link>
                                {sidebar_items.map(item =>
                                    <Typography className={classes.sidebarItem}> {item} </Typography>
                                )}
                            </div>
                            <div className={classes.content}>
                                <Routes childProps={cProps}/>
                            </div>
                        </div>
                    </MuiThemeProvider>
                }
            </>
        );
    }
}

export default withStyles(styles)(withRouter(App));
