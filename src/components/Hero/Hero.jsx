import React from 'react'
import { Link } from 'react-scroll';
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
        <HeroContainer name="home">
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
                <Link 
                    to="about"
                    spy={true} 
                    offset={50}
                    duration={1000}
                    smooth={true}
                >
                    <IntroButton>Say Hello</IntroButton>
                </Link>
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
