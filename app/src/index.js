import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, withRouter} from 'react-router-dom';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

const ScrollToTopComp =  withRouter(ScrollToTop)

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTopComp>
            <App />
        </ScrollToTopComp>
    </BrowserRouter>, document.getElementById('root'));
