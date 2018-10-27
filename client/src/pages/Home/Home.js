import React from "react";
import bizzy from "./images/Bizzy.jpg";
import bizzyBee from "./images/bizzyBee.png";
import "./Home.css";

const Home = props => (
    
    <div className="container-fluid">
        <div className="row first">
            <div className="col">
                <img id="logo" src={bizzy}/>
            </div>
        </div>
        <div className="row">
            <div className="col bio">
                <h3>Let's get BIZZY! <img data-aos="flip-left" id="bizzyBee" src={bizzyBee}></img></h3>
                <p className="intro">Struggling to submit that assignment on time? Missing out on that concert you forgot to buy? Or is it the growing pain in your teeth that you've been ignoring? Or the bills you paid late, AGAIN?</p>
                <p className="intro">Well you might have a case of... PROCRASTINATION. Sounds awful, I know. But that is why BIZZY is here to help!</p>
                <p className="intro">Researchers found that 1 in 5 people = 20% of us, are chronic procrastinators. Shocking!</p>
            </div>
        </div>
        <div className="row second">
            <div className="col bio">
                <h2 className="why" data-aos="zoom-out-right">WHY...</h2>
                <h2 className="why" data-aos="zoom-out-left">Do We Procrastinate?</h2>
                <br/>
                <div className="whyBox">
                    <p>1. You seek the thrill of the last minute rush</p>
                    <p>2. You want to avoid the fear of failure or success </p>
                    <p>3. You are indecisional</p>
                </div>
            </div>
            <div className="col">
            </div>
        </div>
        <div className="row third">
            <div className="col bio">
                <h2 data-aos="flip-up">We know how hard it is...so we made a solution for YOU!</h2>
            </div>
        </div>
        <div className="buttons">
           
        </div>
    </div>
);
export default Home;