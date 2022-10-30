import React from 'react';
import ResumeFile from '../../assets/files/resume.pdf';

// Resume render function
function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            {/* Download for ResumeFile */}
            Download my <a href={ResumeFile} download target="_self">resume</a>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>MERN</li>
                <li>GraphQL, Apollo</li>
            </ul>

        </div>
    )
};
export default Resume;