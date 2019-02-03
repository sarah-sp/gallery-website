/**
 * ADAPTED FROM: https://github.com/mui-org/material-ui/blob/master/docs/src/pages/demos/buttons/ButtonBases.js
 */
import React from 'react';
import {ButtonBase, withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import {main_theme} from "../Theme";

const styles = theme => ({
    image: {
        position: 'relative',
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor'
            },
        },

    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),

    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
        fontFamily: main_theme.palette.primary.fontFamily,
        fontSize: '3vw'
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

class ImageButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={this.props.className} style={ this.props.radius && {borderRadius: this.props.radius}}>
                <ButtonBase
                    focusRipple
                    key={this.props.title}
                    className={classes.image}
                    style={ (this.props.size && {height: this.props.size[0],
                        width: this.props.size[1]}) }
                    focusVisibleClassName={classes.focusVisible}
                    aria-label={this.props.title + " " + "button"}
                >
                <span
                    className={classes.imageSrc}
                    style={this.props.radius ?
                        {
                            borderRadius: this.props.radius,
                            backgroundImage: `url(${this.props.image})`
                        } :
                        {
                            backgroundImage: `url(${this.props.image})`,
                        }}
                />
                    <span className={classes.imageBackdrop} style={ this.props.radius && {borderRadius: this.props.radius}}/>
                    <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="h5"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                      {this.props.title}
                        <span className={classes.imageMarked}/>
                    </Typography>
                </span>
                </ButtonBase>
            </div>
        );
    }
}

export default withStyles(styles)(ImageButton)