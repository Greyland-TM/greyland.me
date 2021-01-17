import React from 'react'
import me from '../media/myImage.jpg';

const Landing = () => (
    <div class="land gradient-1 gradient-2">
        <div class="land__heading">
            {/* <img src={me} alt="Me" className="land__heading--image"/> */}
            <h1 class="land__heading--me">Greyland T. Miller</h1>
            <h2 class="land__heading--skills">HTMl/SCSS | JavaScript / React | UX / UI design | Microsoft VBA</h2>
        </div>
    </div>
);

export default Landing;