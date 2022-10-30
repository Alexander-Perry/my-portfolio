import React from 'react';
import AlexImage from '../../assets/images/alex.jpeg';

function About() {

    return (
        <div>
            <h1>About Me</h1>
            <img src={AlexImage} alt="Alex" width='100px' style={{ 'borderRadius': '50%' }} />
            <p>
                My name is Alex and this is my story.
            </p>
            <p>
                My journey into coding began back in the early 2000s as a teenager with access to the family
                PC, spending countless nights <i>(nights that I should have been doing homework!)</i> browsing
                tutorials and forums learning how websites work.
                <br />Within a year I had landed my first gig as a junior web developer at W3B Design, where I
                worked for a few months performing website maintenance, image editing and learning from the Senior developers within the company,
                before shifting my focus back to high school.
            </p>
            <p>
                Jump to 2007, I had moved into Telecommunications working Tech Support; where
                after a few years, moving into senior support roles learnt about the wonderful world of
                automation scripts that were used for reporting and network testing, and wondered why I had not
                utilised something like this sooner.
                <i>
                    ...After spending plenty of time studying Google and my hair turning grey... I had
                    automated over 90% of my job down to just a few button clicks.
                </i>
            </p>
            <p>
                Over the years, and through a number of different roles, I have developed a number of
                internal projects to fill system gaps, automate tasks and
                perform reporting and notification functions, as well as developed a love of Excel.
            </p>
            <p>
                Today, I work as the Incident Manager for my company's Small and Medium Business division; where I look after the Service
                Assurance space supporting complex Telecommunication services.
                <br />I aspire to become a Full-Stack Developer on a Professional level, being able to shift from
                small-scale support projects, into large-scale impact-driven systems.
            </p>
        </div>
    )

}

export default About;