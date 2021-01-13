import React from 'react';
import { MainHeading, SubHeading } from '../../globalStyles';
import { IntroBox, IntroTextEmphasis, IntroPara } from './Intro.elements';

const Intro = () => {
    return (
        <IntroBox>
            <MainHeading>
                Creating stories through Design
            </MainHeading>
            <SubHeading> 
                Hello! My name is <IntroTextEmphasis>R</IntroTextEmphasis>uel <IntroTextEmphasis>M</IntroTextEmphasis>isa.

            </SubHeading>
            <IntroPara>
            Front End Developer / <br />
            Graphic Designer <br />
            based in Brookyln, NY. 
            </IntroPara>
        </IntroBox>
    )
};

export default Intro;
