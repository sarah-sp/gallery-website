import React, {Component} from 'react';
import Routes from './routes/Routes.js'
import {Link, withRouter} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import AdminPage from "./admin/AdminPage";

let sidebarW = 30
let contentW = 100 - sidebarW

const styles = (theme) => ({
    root: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "stretch",
        alignContent: "stretch",
        minHeight: '100vh'
    },
    sidebar: {
        width: sidebarW+'vw',
        position: 'fixed',
        height: '100vh',
        backgroundColor: 'lightgray',

    },
    content: {
        marginLeft: sidebarW+'vw',
        width: contentW+'vw',
        backgroundColor: 'whitesmoke'
    }
})


class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            isAdmin: false
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
                    <div className={classes.root}>
                        <div className={classes.sidebar}>
                            <b style={{fontSize: 150}}>SPA Template</b>
                        </div>
                        <div className={classes.content}>
                            <Routes childProps={cProps}/>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default withStyles(styles)(withRouter(App));
