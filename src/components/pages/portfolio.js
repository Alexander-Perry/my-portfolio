import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import UPPImage from '../../assets/images/Ultimate Pocket Pal.png';
import CSSSnippetImg from '../../assets/images/CSS_Snippet.png';
import UmbrellaImg from '../../assets/images/Umbrella.png';
import LiftImg from '../../assets/images/Lift_Home.png';
import JATEImg from '../../assets/images/JATE.png';
import TeamProfileImg from '../../assets/images/TeamProfileGen.png'

function Portfolio() {
    return (
        <div>
            <h2>My Portfolio</h2>
            <div className='container justify-content-center'>
                <CardGroup>
                    <Card className="bg-dark text-white border border-light m-2 p-2" style={{ minWidth: '300px' }}  >
                        <Card.Img variant='top' src={UPPImage} />
                        <Card.Body>
                            <Card.Title className='text-center'>Ultimate Pocket Pal</Card.Title>
                            <Card.Text>React app built using React/MUI/MongoDB/JWT</Card.Text>
                            <Card.Link href='https://pacific-forest-65301.herokuapp.com/' >Deployed App</Card.Link>
                            <Card.Link href='https://github.com/Alexander-Perry/ultimate-pocket-pal' >Github Repository</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className="bg-dark text-white border border-light m-2 p-2" style={{ minWidth: '300px' }}  >
                        <Card.Img variant='top' src={CSSSnippetImg} />
                        <Card.Body>
                            <Card.Title className='text-center' >CSS Snippet</Card.Title>
                            <Card.Text>App built in HTML/CSS showcasing Flexbox</Card.Text>
                            <Card.Link href='https://alexander-perry.github.io/CSS-Cheatsheet/' >Deployed App</Card.Link>
                            <Card.Link href='https://github.com/Alexander-Perry/CSS-Cheatsheet'>Github Repository</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="bg-dark text-white border border-light m-2 p-2" style={{ minWidth: '300px' }}  >
                        <Card.Img variant='top' src={UmbrellaImg} />
                        <Card.Body>
                            <Card.Title className='text-center' >Umbrella</Card.Title>
                            <Card.Text>App built using JavaScript/Bootstrap/Google Maps/Weather API</Card.Text>
                            <Card.Link href='https://alexander-perry.github.io/Umbrella/' >Deployed App</Card.Link>
                            <Card.Link href='https://github.com/Alexander-Perry/Umbrella'>Github Repository</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card className="bg-dark text-white border border-light m-2 p-2" style={{ minWidth: '300px' }}  >
                        <Card.Img variant='top' src={LiftImg} />
                        <Card.Body>
                            <Card.Title className='text-center'>Lift</Card.Title>
                            <Card.Text>App build using JavaScript/Bootstrap/Node/Express/Sequelize/MySQL/Handlebars</Card.Text>
                            <Card.Link href='https://salty-ridge-96244.herokuapp.com/' >Deployed App</Card.Link>
                            <Card.Link href='https://github.com/Alexander-Perry/do-you-lift'>Github Repository</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="bg-dark text-white border border-light m-2 p-2" style={{ minWidth: '300px' }}  >
                        <Card.Img variant='top' src={JATEImg} />
                        <Card.Body>
                            <Card.Title className='text-center'>PWA Text Editor</Card.Title>
                            <Card.Text>Console Text Editor in Node and can be installed as a PWA</Card.Text>
                            <Card.Link href='https://guarded-tor-99822.herokuapp.com/' >Deployed App</Card.Link>
                            <Card.Link href='https://github.com/Alexander-Perry/PWA-Text-Editor'>Github Repository</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="bg-dark text-white border border-light m-2 p-2 " style={{ minWidth: '300px' }}  >
                        <Card.Img variant='top' src={TeamProfileImg} />
                        <Card.Body>
                            <Card.Title className='text-center'>Team Profile Generator</Card.Title>
                            <Card.Text>Console Application that generates a team profile HTML file</Card.Text>
                            <Card.Link href='https://github.com/Alexander-Perry/Team-Profile-Generator'>Github Repository</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
};
export default Portfolio;