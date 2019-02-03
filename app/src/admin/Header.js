import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
    secondaryBar: {
        zIndex: 0,
    },
    menuButton: {
        marginLeft: -theme.spacing.unit,
    },
    iconButtonAvatar: {
        padding: 4,
    },
    link: {
        textDecoration: 'none',
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
});

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: this.props.options[0].id
        }
    }

    componentWillReceiveProps(props) {
        if(this.props.options !== props.options) {
            this.setState({
                selected: props.options[0].id
            })
        }
    }

    handleTab = (option) => () => {
        this.props.changeContent(option.content)
        this.setState({
            selected: option.id
        })
    }

    renderPrimaryBar = classes => (
        <AppBar color="primary" position="sticky" elevation={0}>
            <Toolbar>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs/>
                    <Grid item>
                        <Typography className={classes.link} component="a" href="#">
                            Go to docs
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Alerts • No alters">
                            <IconButton color="inherit">
                                <NotificationsIcon/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Help">
                            <IconButton color="inherit">
                                <HelpIcon/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )


    renderSecondaryBar = classes => (
        <AppBar
            component="div"
            className={classes.secondaryBar}
            color="primary"
            position="static"
            elevation={0}
        >
            <Tabs value={this.state.selected} textColor="inherit">
                {this.props.options.map(option =>
                    <Tab textColor="inherit" value={option.id} label={option.id} onClick={this.handleTab(option)}/>
                )}
            </Tabs>
        </AppBar>
    );


    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                {this.renderPrimaryBar(classes)}
                {this.renderSecondaryBar(classes)}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Header);