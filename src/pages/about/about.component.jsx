import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/portrait.png'
import Button from 'react-bootstrap/Button'

import './about.style.css'
const About = () => {
    return (
        <div id='about'>
            <div className="about">
                <h1 className='pt-3 text-center font-details pb-3'>Hello There!</h1>
                <Container>
                    <Row className="pt-3 pb-4 align-items-center">

                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>

                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                My name is Joseph Woo, and I am a Computer Science student currently attending Purdue University.
                            <br /> I was born in 2000 and I grew up in San Jose California. My family moved to LA after I went to college. 
                            <br /> I am currently studying CS with a focus of Algorithms and Artificial Intelligence utilizng machine learning.
                            <br /> In my free time, I enjoy making music, videos, and researching the stock market. I am currently working on my own trading algorithm.
                        </Row>
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="https://drive.google.com/file/d/1gMa3e4DhNS15J7oyfxOqS57E9owWOuKh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" Button variant="outline-primary">
                                                Resume
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/JayWoo2000" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/joseph-woo-b835b8160/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About