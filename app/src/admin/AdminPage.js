import React from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import Page from "@material-ui/icons/ImportContacts";
import Content2 from "./Content2";
import SettingsIcon from '@material-ui/icons/Settings';


const defaultOptions = [{id: "Edit", content: <Content />}]

const categories = [
    {
        id: 'Pages',
        children: [
            { id: 'Collection', icon: <Page />, active: true, options: defaultOptions},
            { id: 'Events', icon: <Page />, options: [{id: "Create", content: <Content2 />},{id: "Edit", content: <Content />}]},
            { id: 'Visiting', icon: <Page />, options: defaultOptions},
            { id: 'About us', icon: <Page />, options: defaultOptions},
            { id: 'Contact', icon: <Page />, options: defaultOptions},
        ],
    },
    {
        id: 'Settings',
        children: [
            { id: 'Webpage', icon: <SettingsIcon />, options: defaultOptions},
            { id: 'Analytics', icon: <SettingsIcon />, options: defaultOptions},
        ],
    }
];

let theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    shape: {
        borderRadius: 8,
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'initial',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing.unit,
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'initial',
                margin: '0 16px',
                minWidth: 0,
                [theme.breakpoints.up('md')]: {
                    minWidth: 0,
                },
            },
            labelContainer: {
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing.unit,
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        ...theme.mixins,
        toolbar: {
            minHeight: 48,
        },
    },
};

const drawerWidth = 256;

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    mainContent: {
        flex: 1,
        padding: '48px 36px 0',
        background: '#eaeff1',
    },
};


class AdminPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            activeOptions: categories[0].children[0].options,
            activeContent: <Content />
        };
    }

    handleNavigate = (options) => {
        this.setState({activeOptions: options, activeContent: options[0].content})
    }

    handleChangeContent = content => {
        this.setState({activeContent: content})
    }

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline />
                    <nav className={classes.drawer}>
                        <Navigator PaperProps={{ style: { width: drawerWidth } }} categories={categories} handleNavigate={this.handleNavigate}/>
                    </nav>
                    <div className={classes.appContent}>
                        <Header options={this.state.activeOptions} changeContent={this.handleChangeContent}/>
                        <main className={classes.mainContent}>
                            {this.state.activeContent}
                        </main>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(AdminPage);