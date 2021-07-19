import React from 'react'
import { MainHeading } from '../../globalStyles';
import { ProcessContainer, ContentBox, ImageContainer, StepContainer, Step, StepTitle, StepText } from './Process.elements';
import { processes } from '../../data/processData';

const Process = () => {
    return (
        <ProcessContainer>
            <MainHeading darkText={true}>
                It's a Journey
            </MainHeading>
            <ContentBox>
                <ImageContainer />
                <StepContainer>
                    {
                        processes.map( step => {
                            return (
                                <Step key={step.id}>
                                    <StepTitle>{ step.headline }</StepTitle>
                                    <StepText> { step.description } </StepText>
                                    {
                                        step.bullets.length > 0 ? (
                                            <ul>
                                                {step.bullets.map( bullet => {
                                                    return (<li key={bullet.bulletId}>
                                                        {bullet.detail}
                                                    </li>)
                                                })}
                                            </ul>
                                        ) : null
                                    }
                                </Step>
                            )
                        })
                    }
                    
                </StepContainer>
            </ContentBox>
        </ProcessContainer>
    )
}

export default Process;
