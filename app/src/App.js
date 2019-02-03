import React, {Component} from 'react';
import Routes from './routes/Routes.js'
import {Link, withRouter} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from 'classnames';

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
        width: sidebarW + 'vw',
        position: 'fixed',
        height: '95vh',
        backgroundColor: main_theme.palette.primary.light,
    },
    sidebarItem: {
        fontSize: '2vw',
        color: main_theme.palette.primary.contrastText,
        textDecoration: 'none',
        fontFamily: main_theme.palette.typography.fontFamily,
        marginTop:'2vw',
        '&:hover': {
            color: main_theme.palette.primary.main,
            cursor: 'pointer'
        }
    },
    sidebarClicked: {
        fontSize: '2vw',
        color: main_theme.palette.primary.main,
        marginTop:'2vw',
        textDecoration: 'none',
        fontFamily: main_theme.palette.typography.fontFamily
    },
    image: {
        width: '15vw',
        height: '15vw'
    },
    content: {
        marginLeft: sidebarW + 'vw',
        width: contentW + 'vw',
        backgroundColor: main_theme.palette.primary.light
    },
    footer: {
        backgroundColor: main_theme.palette.primary.main,
        height: '5vh',
        textAlign: 'center'
    }
});


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAdmin: false
        }
    }

    auth = () => {
        this.setState({
            isAdmin: true,
            isItemClicked: ""
        })
    };

    render() {


        const {classes} = this.props;

        const cProps = {
            auth: this.auth
        };

        return (
            <>
                {this.state.isAdmin ?
                    <AdminPage/>
                    :
                    <MuiThemeProvider theme={main_theme}>
                        <div className={classes.root}>
                            <div className={classes.sidebar}>
                                <Link to={"/"} onClick={() => this.setState({isItemClicked: ""})}>
                                    <img className={classes.image} src={logo}/>
                                </Link>
                                {sidebar_items.map(item =>
                                    <Typography component={Link} to={"/" + item.id}
                                                onClick={() => this.setState({isItemClicked: item.id})}
                                                className={this.state.isItemClicked !== item.id ? classes.sidebarItem : classes.sidebarClicked}> <b>{item.display}</b> </Typography>
                                )}
                            </div>
                            <div className={classes.content}>
                                <Routes childProps={cProps}/>
                            </div>
                        </div>
                        <footer className={classes.footer}>
                            <Typography> Sasa and CC © 2019 </Typography>
                        </footer>
                    </MuiThemeProvider>
                }
            </>
        );
    }
}

export default withStyles(styles)(withRouter(App));
