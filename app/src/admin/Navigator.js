import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';


const styles = theme => ({
    categoryHeader: {
        paddingTop: 16,
        paddingBottom: 16,
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 4,
        paddingBottom: 4,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: 16,
        paddingBottom: 16,
    },
    firebase: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.common.white,
    },
    itemActionable: {
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        color: 'inherit',
        fontSize: theme.typography.fontSize,
        '&$textDense': {
            fontSize: theme.typography.fontSize,
        },
    },
    textDense: {},
    divider: {
        marginTop: theme.spacing.unit * 2,
    },
});

class Navigator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: "Collection"
        }
    }

    handleChildClick = (childId, options) => () => {
        this.setState({active: childId})

        this.props.handleNavigate(options)
    }

    render() {
        const {classes, ...other} = this.props;

        return (
            <Drawer variant="permanent" {...other}>
                <List disablePadding>
                    <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
                        Никола Маринов
                    </ListItem>
                    <ListItem className={classNames(classes.item, classes.itemCategory)}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.itemPrimary,
                            }}
                        >
                            Overview
                        </ListItemText>
                    </ListItem>
                    {this.props.categories.map(({id, children}) => (
                        <React.Fragment key={id}>
                            <ListItem className={classes.categoryHeader}>
                                <ListItemText
                                    classes={{
                                        primary: classes.categoryHeaderPrimary,
                                    }}
                                >
                                    {id}
                                </ListItemText>
                            </ListItem>
                            {children.map(({id: childId, icon, options}) => (
                                <ListItem
                                    button
                                    dense
                                    key={childId}
                                    className={classNames(
                                        classes.item,
                                        classes.itemActionable,
                                        this.state.active === childId && classes.itemActiveItem,
                                    )}
                                    onClick={this.handleChildClick(childId,options)}
                                >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.itemPrimary,
                                            textDense: classes.textDense,
                                        }}
                                    >
                                        {childId}
                                    </ListItemText>
                                </ListItem>
                            ))}
                            <Divider className={classes.divider}/>
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles)(Navigator);