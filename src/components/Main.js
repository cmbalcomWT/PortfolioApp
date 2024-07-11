import React, { useState } from 'react';

import project1Img from "../images/portfolio500.png";
import project2Img from "../images/mealPlan500.png";
import project3Img from "../images/topsail.png";
import myImg from "../images/itMe.jpg";

function Main(){
    return(
        <div className="App-main">
            <section className="About" id="About">
                <h2>About Me</h2>
                <img src={myImg} alt="A Portrait Photo of a Young Woman"></img>
                <p>I believe in designing websites that are simple, intuitive, and aesthetically aligned with the brand's identity. While my primary expertise lies in front-end development, I also have a keen interest in back-end development. Although my practical experience is still growing, my ingenuity and problem-solving skills allow me to tackle challenges effectively. I am flexible, eager to learn, and confident that I would be a valuable asset to any team.</p>
            </section>

            <section className="Projects" id="Projects">
                <h2>Projects</h2>
                <h3>Portfolio Prototype</h3>
                <img src={project1Img} alt="A Website Featuring 3 Columns for Designs, Websites, and Coding"></img>
                <p><a href="https://wcet.waketech.edu/cmbalcom/WEB210/Lesson11/index.html" target="_blank">This</a> is a prototype Portfolio webpage I created in my Web Design course. The goal was to utilize CSS grid to create columns and rows to display our work.
                </p>
                <br></br>

                <h3>Build Your Meal Plan</h3>
                <img src={project2Img} alt="A Filled Out Form Alongside Its Results"></img>
                <p><a href="https://wcet.waketech.edu/cmbalcom/WEB115/FinalProject/finalProject.html?" target="_blank">This</a> is a basic webpage form that utilizes JavaScript to get user information, manipulate it, and open a new window to display the new data. This was created for my Web Markup and Scripting class, which is an introduction to JavaScript, and this webpage was our Final Project.</p>
                <br></br>

                <h3>Topsail Beach</h3>
                <img src={project3Img} alt="A Website Listing Things To Do At A Beach Location"></img>
                <p><a href="https://wcet.waketech.edu/cmbalcom/WEB125/Lesson10/BalcomTopsail.html" target="_blank">This</a> was an assignment for my Mobile Web Design class, where we had to redesign the website for <a href="https://topsailbeachnc.gov/About-Topsail-Beach/History-of-Topsail-Beach" target="_blank">Topsail Beach</a>, a town in North Carolina. The goal was to make the website easier to use on both mobile devices and desktops without straying too far from the initial design.</p>
                <br></br>
            </section>

            <section className="Skills" id="Skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>C#</li>
                </ul>
            </section>

            <section className="Experience" id="Experience">
                <h2>Previous Work Experience</h2>
                <ul>
                    <li>GameStop || 2017-2021</li>
                    <li>Target || 2021-Present</li>
                </ul>
            </section>
        </div>
    )
}

export default Main;