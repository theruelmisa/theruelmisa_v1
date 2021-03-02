import React from 'react'
import { 
    HeroContainer, 
    IntroBox, 
    IntroTitle, 
    IntroSubtitle, 
    IntroPara,
    IntroButton,
    ScrollerBox,
    Scroller
} from './Hero.elements';

const Hero = () => {
    return (
        <HeroContainer>
            <IntroBox>
                <IntroTitle>Creating stories through design</IntroTitle>
                <IntroSubtitle>
                    Hello! My name is Ruel Misa.
                </IntroSubtitle>
                <IntroPara>
                    Front End Developer <br />
                    Graphic Designer <br />
                    based in Brooklyn, NY
                </IntroPara>
                <IntroButton>Say Hello</IntroButton>
                <ScrollerBox>
                    <Scroller />
                    <Scroller />
                    <Scroller />
                </ScrollerBox>
            </IntroBox>
        </HeroContainer>
    )
};

export default Hero;
