import React, { useState } from 'react';

function Header(){
    return(
        <div className = "App-header">
            <title className = "App-title">Balcom React</title>
            <h1>Casey Balcom</h1>
            <h3>Web Development Student</h3>
            <nav className = "App-nav">
                <div id="links">
                    <a href="#About">About Me</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Experience">Experience</a>
                    <a href="#Footer">Contact Me</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;