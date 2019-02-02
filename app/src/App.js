import React, {Component} from 'react';
import Routes from './routes/Routes.js'
import {Link, withRouter} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";

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


    render() {
        const {classes} = this.props
        let cProps = {}

        return (
            <div className={classes.root}>
                <div className={classes.sidebar}>
                    <b style={{fontSize: 150}}>SPA Template</b>
                </div>
                <div className={classes.content}>
                    <Routes cProps/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(App));
