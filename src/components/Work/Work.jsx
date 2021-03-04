import React from 'react'
import { WorkContainer, WorkItemGrid } from './Work.elements';
import { MainHeading } from '../../globalStyles';
import WorkItem from './WorkItem/WorkItem';
import { projects } from '../../data/projectData';


const Work = () => {
    return (
        <WorkContainer>
            <MainHeading>Projects I've built</MainHeading>

            <WorkItemGrid>
                {
                    projects.map( project => (
                        <WorkItem key={project.id} project={project} />
                    ))
                }

            </WorkItemGrid>

        </WorkContainer>
    )
};

export default Work;
