import React from 'react'
import { AboutContainer, ContentBox, Contact, ContactTitle } from './About.elements';
import { MainHeading } from '../../globalStyles';



const About = () => {
    return (
        <AboutContainer name="about">
            <MainHeading darkText={true}>
                A little about me
            </MainHeading>
            <ContentBox>
                <div>
                    <div>
                        <h3>My story</h3>
                        <p>Some story</p>
                    </div>
                    <div>
                        <h3>Toolset</h3>
                        <ul>
                            <li>React</li>
                            <li>React</li>
                            <li>React</li>
                            <li>React</li>
                            <li>React</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
                <Contact>
                    <ContactTitle>Ready to talk?</ContactTitle>
                    <ul>
                        <li>email</li>
                        <li>number</li>
                    </ul>
                </Contact>
            </ContentBox>
        </AboutContainer>
    )
};

export default About;
