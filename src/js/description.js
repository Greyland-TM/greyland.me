import React from 'react'
import hands from '../media/handsin.jpg';

const Description = () => (
    <div className="description">
        {/* <figure className="description__image descripion__image--1">
            <img src={hands} alt="together"/>
        </figure> */}

        <div className="description-content">
            <div className="">
                <h2 className="description-content__head description-content__head--1">What about Greyland?</h2>
            <p className="description-content__text description-content__text--1">
                I am a largly self taught software developer who is currently persuing a masters in computer science 
                and working at Columbia Helicopters as a Buisness Intelligence Developer. Most of my expierence is in 
                front end web development and Microsoft applications.
            </p>
            <h3 className="description-content__head description-content__head--2">How can I help you?</h3>
            <p className="description-content__text description-content__text--2">
                You're starting up a brand new company and need help <span>promoting &nbsp;</span>your name 
                and building the perfect website, Greyland can help.
            </p>
            <p className="description-content__text description-content__text--3">
                You need a better way to manage the employees you already have? Greyland can <span>design &nbsp;</span>design personalized 
                spreadsheets that will exceed your wildest expectations.
            </p>
            </div>
            
        </div>
    </div>
);

export default Description;