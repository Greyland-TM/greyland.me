import React from 'react'
import Card from './card';
import nexter from '../media/nexter3.png';
import trillo from '../media/trillo.png';
import notorus from '../media/notorus.jpg';

const Projects = () => (
    <div className="projects">

        <div className="projects__head">
            <h3 className="projects__head">Here are some of my favorite completed projects.</h3>
        </div>

        <Card
            src={nexter}
            description='I made this project for a udemy class in front end design.'
            p1='React'
            p2='SCSS'
            p3='Responsice design'
            p4=''
        ></Card>

        <Card
            src={trillo}
            description='I made this project for a udemy class in front end design.'
            p1='React'
            p2='SCSS'
            p3='Responsice design'
            p4=''
        ></Card>

        <Card
            src={notorus}
            description='I made this project for a udemy class in front end design.'
            p1='React'
            p2='SCSS'
            p3='Responsice design'
            p4=''
        ></Card>

        <div className="btn">Click here to see them all.</div>

    </div>
);

export default Projects;