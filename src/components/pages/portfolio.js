import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import UPPImage from '../../assets/images/Ultimate Pocket Pal.png';
import CSSSnippetImg from '../../assets/images/CSS_Snippet.png';
import UmbrellaImg from '../../assets/images/Umbrella.png';
import LiftImg from '../../assets/images/Lift_Home.png';

function Portfolio() {
    return (
        <div>
            <h2>My Portfolio</h2>
            <div className='container justify-content-center'>
                <CardGroup>
            <Card className="bg-dark text-white m-2"  >
                    <Card.Img variant='top' src={UPPImage} />
                    <Card.Body>
                        <Card.Title >Ultimate Pocket Pal</Card.Title>
                        <Card.Text>React app built using React/MUI/MongoDB/JWT</Card.Text>
                        <Card.Link href='https://pacific-forest-65301.herokuapp.com/' >Check it out</Card.Link>
                    </Card.Body>
                    </Card>
                    </CardGroup>

                <CardGroup>
                    <Card className="bg-dark text-white m-2" style={{ maxWidth: '1000px' }}>
                        <Card.Img variant='top' src={CSSSnippetImg} />
                        <Card.Body>
                            <Card.Title >CSS Snippet</Card.Title>
                            <Card.Text>App built in HTML/CSS showcasing Flexbox</Card.Text>
                            <Card.Link href='https://alexander-perry.github.io/CSS-Cheatsheet/' >Check it out</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="bg-dark text-white m-2" style={{ maxWidth: '1000px' }}>
                        <Card.Img variant='top' src={UmbrellaImg} />
                        <Card.Body>
                            <Card.Title >Umbrella</Card.Title>
                            <Card.Text>App built using JavaScript/Bootstrap/Google Maps/Weather API</Card.Text>
                            <Card.Link href='https://alexander-perry.github.io/Umbrella/' >Check it out</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="bg-dark text-white m-2" style={{ maxWidth: '1000px' }}>
                        <Card.Img variant='top' src={LiftImg} />
                        <Card.Body>
                            <Card.Title >Lift</Card.Title>
                            <Card.Text>App build using JavaScript/Bootstrap/Node/Express/Sequelize/MySQL/Handlebars</Card.Text>
                            <Card.Link href='https://salty-ridge-96244.herokuapp.com/' >Check it out</Card.Link>
                        </Card.Body>
                    </Card>

                </CardGroup>
             





            </div>

            






        </div>
    )
};
export default Portfolio;