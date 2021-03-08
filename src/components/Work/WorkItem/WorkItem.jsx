import React from 'react'
import { 
    Card,
    CardText,
    CardTitle,
    CardDesc,
    Tech,
    TechItems,
    LinkBox,
    LinkItems,
    CardImgBox,
    CardImg
} from './WorkItem.elements';
import { IoLogoGithub, IoBrowsers } from 'react-icons/io5';


const WorkItem = ({ project }) => {

    return (
        <Card>
            <CardImgBox title="See live">
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <CardImg src={project.image} alt={project.name} />  
                </a>
            </CardImgBox>
            <CardText>
                <CardTitle>{project.name}</CardTitle>
                <CardDesc>{project.desc}</CardDesc>
                <Tech>
                    { project.stack.map( (item, index ) => (
                        <TechItems key={index}>{item}</TechItems>
                    ))}
                </Tech>
                <LinkBox>
                    <LinkItems>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <IoLogoGithub /> 
                        </a>
                    </LinkItems>
                    <LinkItems>
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                            <IoBrowsers /> 
                        </a>
                    </LinkItems>
                </LinkBox>
            </CardText>
        </Card>
    )
};

export default WorkItem;
