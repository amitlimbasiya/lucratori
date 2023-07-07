import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion, Table } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/emp-jobs-data-listing";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const JobsAnnouncementFun = () => {

    return (
        <>
            <s.JobAnnouncementSection className="JobAnnouncementSection">
                <Container>
                    <Row>
                        <Col xl={3} lg={3}>
                            <div className="filter-item">
                                <Accordion defaultActiveKey={['0', '1', '2', '3', '4', '5', '6', '7']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Search</Accordion.Header>
                                        <Accordion.Body >
                                            <div className="searchFilter">
                                                <Form.Control className="mb-3" type="text" placeholder="Search by keyword" />
                                                <button className="searchBtn"><SearchOutlinedIcon /></button>
                                            </div>
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"search-by-name"}
                                                label={"Search by name"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"search-whole-cv"}
                                                label={"Search through the whole CV"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Candidate’s Rating</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"good"}
                                                label={"Good"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"medium"}
                                                label={"Medium"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"new"}
                                                label={"New"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"rejected"}
                                                label={"Rejected"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Total Experience</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"leess1-years"}
                                                label={"< 1 years (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"one-two-year"}
                                                label={"1 - 2 years (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"two-five-years"}
                                                label={"2 - 5 years (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"five-ten-years"}
                                                label={"5 - 10 years (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"ten-or-above-years"}
                                                label={"> 10 years (0)"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Education Level</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"elementary-school"}
                                                label={"Elementary school (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"high-school"}
                                                label={"High school (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"undergraduate"}
                                                label={"Undergraduate (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"bachelors-degree"}
                                                label={"Bachelor’s degree (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"masters-degree"}
                                                label={"Master’s degree (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"mba"}
                                                label={"MBA (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"doctorate-phd"}
                                                label={"Doctorate (PhD) (0)"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Languages spoken</Accordion.Header>
                                        <Accordion.Body >
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"english"}
                                                label={"English (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"french"}
                                                label={"French (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"italian"}
                                                label={"Italian (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"spanish"}
                                                label={"Spanish (0)"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Driver's License</Accordion.Header>
                                        <Accordion.Body >
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"dl-a"}
                                                label={"A (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"dl-b"}
                                                label={"B (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"dl-c"}
                                                label={"C (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"dl-d"}
                                                label={"D (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"dl-e"}
                                                label={"E (0)"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Currently employed</Accordion.Header>
                                        <Accordion.Body >
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"c-employed-yes"}
                                                label={"Yes (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"c-employed-no"}
                                                label={"No (0)"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Latest CV update</Accordion.Header>
                                        <Accordion.Body >
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"cv-update-all"}
                                                label={"All (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"cv-update-last-month"}
                                                label={"Last month (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"cv-update-last-three-month"}
                                                label={"Last 3 months (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"cv-update-last-six-month"}
                                                label={"Last 6 months (0)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"cv-update-last-year"}
                                                label={"Last year (0)"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                        <Col xl={9} lg={9}>
                            <div className="top-information">
                                <div className="numberOfJobs">We found <span>(7)</span> results</div>
                            </div>
                            <div className="jobAnnouncementDataTbl">
                                <Table bordered responsive="lg">
                                    <thead>
                                        <tr>
                                            <th>Candidate’s Name</th>
                                            <th>Industry</th>
                                            <th>City</th>
                                            <th>Date</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Alex Graham</td>
                                            <td>Accountant</td>
                                            <td>Bucharest</td>
                                            <td>25 Aug 2023</td>
                                            <td>Good</td>
                                        </tr>
                                        <tr>
                                            <td>Jim Tood</td>
                                            <td>Store Keeper</td>
                                            <td>Bucharest</td>
                                            <td>31 May 2023</td>
                                            <td>Medium</td>
                                        </tr>
                                        <tr>
                                            <td>Alex Graham</td>
                                            <td>Technician</td>
                                            <td>Bucharest</td>
                                            <td>11 Sep 2023</td>
                                            <td>New</td>
                                        </tr>
                                        <tr>
                                            <td>Kevin Bobb</td>
                                            <td>Manager</td>
                                            <td>Bucharest</td>
                                            <td>1 May 2023</td>
                                            <td>Good</td>
                                        </tr>
                                        <tr>
                                            <td>Steven Marvin</td>
                                            <td>Plumber</td>
                                            <td>Bucharest</td>
                                            <td>15 May 2023</td>
                                            <td>Medium</td>
                                        </tr>
                                        <tr>
                                            <td>Carry John</td>
                                            <td>Painter</td>
                                            <td>Bucharest</td>
                                            <td>28 May 2023</td>
                                            <td>New</td>
                                        </tr>
                                        <tr>
                                            <td>Tom D’cruz</td>
                                            <td>Marketing</td>
                                            <td>Bucharest</td>
                                            <td>28 May 2023</td>
                                            <td>New</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </s.JobAnnouncementSection>
        </>
    );
};

export default JobsAnnouncementFun;
