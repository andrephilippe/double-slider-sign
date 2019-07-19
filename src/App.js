import React from 'react';
import './App.css';
import Container from './Container';

const LeftComponent = () => (
    <div>
        <h1>Welcome Sign In</h1>
        <button id="signIn" type="button">
            Sign In
        </button>
    </div>
);

const RightComponent = () => (
    <div>
        <h1>Welcome Sign Up</h1>
        <button id="signUp" type="button">
            Sign Up
        </button>
    </div>
);

const App = () => {
    return (
        <div className="App">
            <Container>
                <Container.SignIn>
                    <p>Sign In Component</p>
                    <button>SUBMIT</button>
                </Container.SignIn>
                <Container.SignUp>
                    <p>Sign Up Component</p>
                    <button>SUBMIT</button>
                </Container.SignUp>
                <Container.Overlay>
                    <Container.Overlay.Left>
                        <LeftComponent />
                    </Container.Overlay.Left>
                    <Container.Overlay.Right>
                        <RightComponent />
                    </Container.Overlay.Right>
                </Container.Overlay>
            </Container>
        </div>
    );
};

export default App;
