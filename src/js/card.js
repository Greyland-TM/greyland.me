import React from 'react';


const Card = (props) => (

    <div className="card">
        <div className="card__top">
            {/* <h3 className="card__title">{props.title}</h3> */}
            <figure className="card__image">
                <img src={props.src} alt="Project Cover" className='card__image'/>
            </figure>
        </div>
        
        <div className="card__bottom">
            <p className="card__bottom--description">{props.description}</p>
            <div className="card__tools">
                <p className="card__tools--item">{props.p1}</p>
                <p className="card__tools--item">{props.p2}</p>
                <p className="card__tools--item">{props.p3}</p>
                <p className="card__tools--item">{props.p4}</p>
            </div>
        </div>
    </div>
);



export default Card;



