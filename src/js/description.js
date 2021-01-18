import React from 'react'
import hands from '../media/handsin.jpg';

const Description = () => (
    <div className="description">
        {/* <figure className="description__image-container">
            <img src={hands} alt="together" className="description__image description-content-1__image-1"/>
        </figure> */}

        {/* <img src={hands} alt="together" className="description__image description-content-1__image-1"/> */}

        <div className="description-content-1">
            <div className="">
                <h2 className="description-content-1__head description-content-1__head--1">What about Greyland?</h2>
            <p className="description-content-1__text description-content-1__text--1">
                I am a largly self taught software developer who is currently persuing a masters in computer science 
                and working at Columbia Helicopters as a Buisness Intelligence Developer. Most of my expierence is in 
                front end web development and Microsoft applications.
            </p>
            <h3 className="description-content-1__head description-content-1__head--2">How can I help you?</h3>
            <p className="description-content-1__text description-content-1__text--2">
                You're starting up a brand new company and need help <span>promoting &nbsp;</span>your name 
                and building the perfect website, Greyland can help.
            </p>
            <p className="description-content-1__text description-content-1__text--3">
                You need a better way to manage the employees you already have? Greyland can <span>design &nbsp;</span>design personalized 
                spreadsheets that will exceed your wildest expectations.
            </p>
            </div>
            
        </div>

        <div className="description-content-2">
            <div className="">
                <h2 className="description-content-2__head description-content-2__head--1">What about Greyland?</h2>
            <p className="description-content-1__text description-content-1__text--1">
                I am a largly self taught software developer who is currently persuing a masters in computer science 
                and working at Columbia Helicopters as a Buisness Intelligence Developer. Most of my expierence is in 
                front end web development and Microsoft applications.
            </p>
            <h3 className="description-content-2__head description-content-2__head--2">How can I help you?</h3>
            <p className="description-content-2__text description-content-2__text--2">
                You're starting up a brand new company and need help <span>promoting &nbsp;</span>your name 
                and building the perfect website, Greyland can help.
            </p>
            <p className="description-content-2__text description-content-2__text--3">
                You need a better way to manage the employees you already have? Greyland can <span>design &nbsp;</span>design personalized 
                spreadsheets that will exceed your wildest expectations.
            </p>
            </div>
            
        </div>
    </div>
);

export default Description;