import {Component} from 'react';
import './Main.css';
import Theme from '../../contexts/ThemeContext';

export default class Main extends Component {
    static contextType = Theme;

    render() {
        return (
            <main className="main-section d-flex flex-column gap-5">
                <div
                    className={`position-relative d-flex shadow-sm align-items-center logo-bg-${this.context.theme} justify-content-center rounded-circle logo`}
                >
                    <div className="w-100 position-absolute switch-border border border-2 first"></div>
                    <div className="w-100 position-absolute switch-border border border-2 second"></div>
                </div>
                <h1 className="display-2 fw-medium">
                    Hello.
                    <br />
                    My name is Kevin
                </h1>
                <div className="w-25 my-4 switch-border border"></div>
                <p>
                    I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making
                    complex processes easy to use.
                    <br />
                    <br /> Right now, I'm Design Lead at <a href="#">Holiday Extras</a>, covering all our digital platforms across a whole
                    load of brands – leading a great team across <a href="#">design</a>, UI engineering, accessibility and customer
                    experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst
                    others – testing, iterating and optimising our platforms and products.
                    <br />
                    <br /> I've got some <a href="#">work on Dribbble</a>, some previous work at Saga and you can find me over on twitter
                    and sometimes on Medium too. I also take too many photos.
                </p>
            </main>
        );
    }
}
