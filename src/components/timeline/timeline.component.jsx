import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_SNS from "../../assets/img/skills/socialMedia.png";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_ADOP from "../../assets/img/skills/adop2.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_MYSQL from "../../assets/img/skills/mysql-5.svg";
import L_EC2 from "../../assets/img/skills/aws_ec2.svg";
import L_ATHENA from "../../assets/img/skills/aws-athena.svg";
import L_AWS from "../../assets/img/skills/amazon-web-services-2.svg";
import L_QUICKSIGHT from "../../assets/img/skills/amazon-quicksight.svg";
import L_GRAFANA from "../../assets/img/skills/grafana.svg";
import L_JAVA from "../../assets/img/skills/java.svg";


import "./timeline.style.css";


const Projecttimeline = () => {
    return (
        <div id='history'>
            <h1 className="pt-3 text-center font-details-b pb-3">History</h1>
            <Timeline>
                <Events>
                    {/* Project: Todo List With MUI */}
                    <ImageEvent
                        date="August 2020-April 2021"
                        className="text-center"
                        text="ADOP"
                        src={L_ADOP}
                        alt="ADOP"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Part Time Worker for ADOP, a Korean based advertising optimization agency which connects platforms with advertisers.
                                                <hr />
                                                <strong>Tasks:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Wrote automated Python and MySQL scripts through Amazon Web services like Athena and EC2 in a Linux based environment displaying advertiser web traffic, earnings, and statistics onto a Grafana based dashboard.</li>
                                                    <li>Set up sample and template Amazon Quicksight dashboards to market to clients. </li>
                                                    <li>Developed Machine Learning algorithm in Python using SVM Vectors for Natural Language Processing to classify websites as adult or non-adult.</li>
                                                </ul>
                                                <hr />
                                                <strong>Environemnts and Languages used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PYTHON}
                                                                alt="Python"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "} Python
                                                     </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MYSQL}
                                                                alt="MYSQL"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "} MySQL </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_EC2}
                                                                alt="Ec2"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              AWS-EC2
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_ATHENA}
                                                                alt="Amazon Athena"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}AWS-Athena</span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_QUICKSIGHT}
                                                                alt="Amazon Quicksight"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}AWS-Quicksight</span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_GRAFANA}
                                                                alt="Grafana"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}Grafana</span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            
                        </div>
                    </ImageEvent>
                    {/* Project: MERN Tip Calculator */}
<ImageEvent
            date="August 2020"
            className="text-center"
            text="Social Media Application"
            src={L_SNS}
            alt="MERN Tip Calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Worked with team a working social media application in Java.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Account creations, login information, and deletion</li>
                          <li>Create, edit, and delete posts</li>
                          <li>Comment on other account posts</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="Java"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/janneynana/CS180-Project5"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
};

export default Projecttimeline;