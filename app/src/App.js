import React, {Component} from 'react';
import Routes from './routes/Routes.js'
import {Link, withRouter} from 'react-router-dom';


class App extends Component {

    render() {
        let cProps = {}

        return (
            <div className="App">
                <div>
                    <b style={{fontSize: 150}}>SPA Template</b>
                </div>
                <Routes cProps/>
            </div>
        );
    }
}

export default withRouter(App);
