import { About } from '../../pages/About';
import './App.css';
import { StyledApp } from './App.styles';

function App(): JSX.Element {
    return (
        <StyledApp>
            <div className="app-header">
                <div className="header-left-side">Porfolio</div>
                <div className="center">Center</div>
                <div className="header-right-side">
                    <button type="button" className="about">About</button>
                </div>
            </div>
            <div className="app-body">
                <About />
            </div>
        </StyledApp>
    );
}

export default App;
