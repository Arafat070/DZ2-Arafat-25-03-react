import React from 'react';
import './App.css';
import Container from './components/Cointainer';
import Header from "./components/Header";
import Shop from "./components/Shop";



function App() {
    return (
        <div className="App">
            <Header/>
            <Shop/>
            <Container />
        </div>
    );
}

export default App;