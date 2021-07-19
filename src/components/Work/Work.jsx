import React, { useState, useEffect } from 'react';
import { WorkContainer, WorkItemGrid } from './Work.elements';
import { MainHeading } from '../../globalStyles';
import WorkItem from './WorkItem/WorkItem';
// import { projects } from '../../data/projectData';
import { projects } from '../../data/frontEndProjectsData';


const Work = () => {
    const [ playAnimation, setPlayAnimation ] = useState(false);

    useEffect( () => {

        console.log(window.pageYOffset);
        if (window.pageYOffset > 200) {
            setPlayAnimation(true);
            
        }



    }, [playAnimation])

    return (
        <WorkContainer name="work" playAnimation={playAnimation}>
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
