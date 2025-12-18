import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: 'https://github.com/user/project-one'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: 'https://github.com/user/project-two'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: 'https://github.com/user/project-three'
        }
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;