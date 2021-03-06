import React from 'react';
import { aboutDetails } from '../../data/aboutData';
import { 
    AboutContainer, 
    ContentBox, 
    AboutContent,
    AboutSubheading,
    StoryBox,
    SkillsBox, 
    Skills,
    Contact, 
    ContactTitle,
    ContactDetails, 
} from './About.elements';
import { MainHeading } from '../../globalStyles';
import { IoCall, IoMail } from 'react-icons/io5';



const About = () => {

    const { backstory1, backstory2, backstory3, skills } = aboutDetails;

    return (
        <AboutContainer name="about">
            <MainHeading darkText={true}>
                A little about me
            </MainHeading>
            <ContentBox>
                <AboutContent>
                    <StoryBox>
                        <AboutSubheading>Who am I</AboutSubheading>
                        <p>{backstory1}</p>
                        <p>{backstory2}</p>
                        <p>{backstory3}</p>
                    </StoryBox>
                    <SkillsBox>
                        <AboutSubheading>Toolset</AboutSubheading>
                        <Skills>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>SQL</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>Illustrator</li>
                            <li>Photoshop</li>
                            <li>XD</li>
                        </Skills>
                    </SkillsBox>
                </AboutContent>
                <Contact>
                    <ContactTitle>Ready to talk?</ContactTitle>
                    <ContactDetails>
                        <li>
                            <IoMail /> <span>ruel.g.misa@gmail.com</span>
                        </li>
                        <li>
                            <IoCall /> <span>917.724.6759</span>
                        </li>
                    </ContactDetails>
                </Contact>
            </ContentBox>
        </AboutContainer>
    )
};

export default About;
