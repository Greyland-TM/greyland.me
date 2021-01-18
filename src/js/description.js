import React from 'react'
import hands from '../media/handsin.jpg';
import tablet from '../media/tablet.jpg';

const Description = () => (
    <div className="description">
        
        <img src={hands} alt="together" className="description__image description__image--1"/>
        <div className="description__content description__content--1">
            <div className="">
                <h2 className="description__content--head">What about Greyland?</h2>
                <p className="description__content--text">
                    I am a largly self taught software developer who is currently persuing a masters in computer science 
                    and working at Columbia Helicopters as a Buisness Intelligence Developer. Most of my expierence is in 
                    front end web development and Microsoft applications.
                </p>
                <h3 className="description__content--head">How can I help you?</h3>
                <p className="description__content--text">
                    You're starting up a brand new company and need help <span>promoting &nbsp;</span>your name 
                    and building the perfect website, Greyland can help.
                </p>
                <p className="description__content--text margin-bottom-sm">
                    You need a better way to manage the employees you already have? Greyland can <span>design &nbsp;</span>personalized 
                    spreadsheets that will exceed your wildest expectations.
                </p>
            </div>
        </div>

        <img src={tablet} alt="together" className="description__image description__image--2"/>
        <div className="description__content description__content--2">
            <div className="">
                <h2 className="description__content--head">What about Greyland?</h2>
                <p className="description__content--text">
                    I am a largly self taught software developer who is currently persuing a masters in computer science 
                    and working at Columbia Helicopters as a Buisness Intelligence Developer. Most of my expierence is in 
                    front end web development and Microsoft applications.
                </p>
                <h3 className="description__content--head">How can I help you?</h3>
                <p className="description__content--text">
                    You're starting up a brand new company and need help <span>promoting &nbsp;</span>your name 
                    and building the perfect website, Greyland can help.
                </p>
                <p className="description__content--text margin-bottom-sm">
                    You need a better way to manage the employees you already have? Greyland can <span>design &nbsp;</span>personalized 
                    spreadsheets that will exceed your wildest expectations.
                </p>
            </div>
        </div>

    </div>
);

export default Description;