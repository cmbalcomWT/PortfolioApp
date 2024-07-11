//Import the necessary React modules at the top of the file
import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './App.css';

//Create a functional component called App
function App(){
    //Inside the App component, return a basic JSX template that includes a header, a main section, and a footer
    return(
        <div className = "App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;