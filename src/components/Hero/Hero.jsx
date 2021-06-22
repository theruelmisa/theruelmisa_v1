import React, { useRef } from 'react'
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
    const introTitleRef = useRef(null);

    // useEffect(() => {
    //     gsap.from(introTitleRef.current, {
    //         duration: 1,
    //         autoAlpha: 0,
    //         ease: 'none',
    //         delay: .5
    //     })

    // }, [])

    return (
        <HeroContainer name="home">
            <IntroBox>
                <IntroTitle ref={introTitleRef} >Creating stories through design</IntroTitle>
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
