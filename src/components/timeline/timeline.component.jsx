import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_SNS from "../../assets/img/skills/socialMedia.png";
import L_BIZTRK from "../../assets/img/skills/biztrak.png";
import L_HYPERLOOP from "../../assets/img/skills/hyperloop.png"

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
import L_MATLAB from "../../assets/img/skills/matlab-seeklogo.com.svg";
import L_SIMULINK from "../../assets/img/skills/Simulink_Logo.png";
import L_SWARM from "../../assets/img/skills/SWARM.png";

import "./timeline.style.css";


const Projecttimeline = () => {
  return (
    <div id='history'>
      <h1 className="pt-3 text-center font-details-b pb-3">History</h1>
      <Timeline>
        <Events>
          <ImageEvent
            date="August 2021-December 2021"
            className="text-center"
            text="Vertically Integrated Projects SWARMS"
            src={L_SWARM}
            alt="SWARMS"
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
                        <strong>Description:</strong> Path Planning Team Member: Responsible for developing a web-based user portal, cloud-based simulation engine and a set of standard algorithm components for autonomous control of drone swarms.
                                                <hr />
                        <strong>Tasks:</strong>
                        <ul className="list-styles pt-1">
                          <li>Integrating A* and Dijkstra algorithms to find the most efficient path for swarm of autonomous drones to reach their destination or series of destinations.</li>
                          <li>Delegating tasks to different drones utilizing Pascal’s task allocation hierarchy to maximize efficiency of task completion.</li>
                          <li>Collaborating with the obstacle avoidance team to allow for drones to better optimize path finding by treating other drones as obstacles to minimize collisions.</li>
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
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Green-Team-Systems/Obstacle-Avoidance"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="June 2021-August 2021"
            className="text-center"
            text="Virgin Hyperloop"
            src={L_HYPERLOOP}
            alt="VIRGIN HYPERLOOP"
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
                        <strong>Description:</strong> Simulation and Analysis Internship with Virgin Hyperloop, a high-speed transport system using a vacuum train.
                                                <hr />
                        <strong>Tasks:</strong>
                        <ul className="list-styles pt-1">
                          <li>Refined and developed MATLAB application to display embedded file structures, plot time-statistics, and automatically verify data.</li>
                          <li>Performed post-processing on track data to better reflect real-world conditions of the transportation pod inside the vacuum tube. </li>
                          <li>Pipelined different MATLAB projects, scripts, and Simulink models together so that manually reorganizing output structures and retrieving inputs by name was no longer required.</li>
                        </ul>
                        <hr />
                        <strong>Skills used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATLAB}
                                alt="Matlab"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "} MATLAB
                                                     </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SIMULINK}
                                alt="Matlab Simulink"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "} Matlab Simulink </span>
                          </li>
                          <li>
                            <span className="p-2">
                              {" "}Matlab App Designer</span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>

            </div>
          </ImageEvent>
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
                        <strong>Environments and Languages used:</strong>
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
          <ImageEvent
            date="February 2021"
            className="text-center"
            text="Buisness Analytics Project"
            src={L_BIZTRK}
            alt=""
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
                        <strong>Description:</strong> 3 day team hackathon project to assist buisnesses with remaining operational in a pandemic world. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Easy input of transactional ledgers to record time, size of purchases, and other miscellaneous details such as membership status</li>
                          <li>Data visualization for weekly and daily activity.</li>
                          <li>Once data is inputted, states a recommendation for operating hours for the buisness</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
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
                  href="https://github.com/Parv17k/business_optimization_hack_in_place_2.0"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=P-r33xQarQM&feature=emb_title"
                  target="_blank"
                >
                  Video Demo
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="August 2020"
            className="text-center"
            text="Social Media Application"
            src={L_SNS}
            alt=""
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