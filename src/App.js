import {Component} from 'react';
import './App.css';
import Home from './components/home';
import Theme from './contexts/ThemeContext';

class App extends Component {
    constructor() {
        super();
        this.state = {theme: 'dark'};
    }

    switch = () => {
        let need = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({theme: need});
    };

    render() {
        return (
            <Theme.Provider value={{theme: this.state.theme, btn: this.switch}}>
                <div className="whole">
                    <Home pos="left" theme={this.state.theme === 'light' ? 'light' : 'dark'} />
                    <Home pos="right" theme={this.state.theme === 'light' ? 'dark' : 'light'} />
                </div>
            </Theme.Provider>
        );
    }
}

export default App;
