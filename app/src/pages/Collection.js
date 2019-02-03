import girl from '../assets/girl.jpg';
import sculpture from '../assets/sculpture.JPG';
import painting from '../assets/painting.jpg'
import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import ImageButton from "../share/ImageButton";


const styles = ({

    root: {},
    image: {
        marginTop: '5vw'
    }
});

class Collection extends Component {

    render() {

        const {classes} = this.props;

        return (
            <>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '5vw'}}>
                    <ImageButton className={classes.image} title="Никола Маринов" radius={"0"} image={girl}
                                 size={['30vh', '28vw']}/>
                    <ImageButton className={classes.image} title="Живопис" radius={"0"} image={painting}
                                 size={['30vh', '28vw']}/>
                    <ImageButton className={classes.image} title="Скулптура" radius={"0"} image={sculpture}
                                 size={['30vh', '28vw']}/>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(Collection);