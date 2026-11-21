import {Component} from 'react';
import './Home.css';
import Header from '../header/Header';
import Theme from '../../contexts/ThemeContext';
import Main from '../main';

export default class Home extends Component {
    static contextType = Theme;

    render() {
        return (
            <div
                className={`home-screen ${this.props.pos === 'left' ? 'left-side' : ''} ${this.props.pos === 'right' ? 'right-side' : ''} position-absolute d-flex flex-column rounded-5 overflow-hidden border border-5 border-dark theme-${this.props.theme}`}
            >
                <Header />
                <Main />
            </div>
        );
    }
}
