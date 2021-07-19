import React from 'react'
import { Link } from 'react-scroll';
// import { gsap } from 'gsap';
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
                <IntroTitle >Creating exceptional digital experiences</IntroTitle>
                <IntroSubtitle>
                    Hello! My name is Ruel Misa.
                </IntroSubtitle>
                <IntroPara>
                    Front End Developer & Designer<br />
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
