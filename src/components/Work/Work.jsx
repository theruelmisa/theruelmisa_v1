import React from 'react';
import { WorkContainer, WorkItemGrid } from './Work.elements';
import { MainHeading } from '../../globalStyles';
import WorkItem from './WorkItem/WorkItem';
// import { projects } from '../../data/projectData';
import { projects } from '../../data/frontEndProjectsData';


const Work = () => {

    return (
        <WorkContainer name="work">
            <MainHeading>Projects I've worked on</MainHeading>

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
