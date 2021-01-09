import React from 'react';
import { IntroBox } from './Intro.elements';

const Intro = () => {
    return (
        <IntroBox>
            <h3>Hi there. My name is</h3>
            <h1>
                <span style={{ color: "orange"}}>R</span>uel <span style={{ color: "orange"}}>M</span>isa. <br />
                I build things.
            </h1>

            <p>I am a Front End Developer and Graphic Designer based in Brookyln, NY. I specialize in building creative User Interfaces.</p>
        </IntroBox>
    )
};

export default Intro;
