import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/jobs-listing.style";
import CustomScroll from 'react-custom-scroll';
import JobsListCompFun from "../jobs-listing-component";

const JobsListFun = () => {

    return (
        <>
            <s.JobsListParent className="JobsListParent">
                <Container>
                    <Row>
                        <Col xl={3} lg={3}>
                            <div className="filter-item">
                                <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Cities</Accordion.Header>
                                        <Accordion.Body >
                                            <Form.Control className="mb-3" type="text" placeholder="eg: Bucharest" />
                                            <div className="customHeight">
                                                <CustomScroll heightRelativeToParent="calc(100% - 10px)">
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"remote-from-home"}
                                                        label={"Remote (from home)"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"abroad"}
                                                        label={"Abroad"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"bucharest"}
                                                        label={"Bucharest"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"timisoara"}
                                                        label={"Timisoara"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"lasi"}
                                                        label={"Lasi"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"constant"}
                                                        label={"Constant"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"craiova"}
                                                        label={"Craiova"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"brasov"}
                                                        label={"Brasov"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"abrud"}
                                                        label={"Abrud"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"remote-from-home"}
                                                        label={"Remote (from home)"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"abroad"}
                                                        label={"Abroad"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"bucharest"}
                                                        label={"Bucharest"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"timisoara"}
                                                        label={"Timisoara"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"lasi"}
                                                        label={"Lasi"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"constant"}
                                                        label={"Constant"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"craiova"}
                                                        label={"Craiova"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"brasov"}
                                                        label={"Brasov"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"abrud"}
                                                        label={"Abrud"}
                                                    />
                                                </CustomScroll>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Type of Schedule</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"full-time"}
                                                label={"Full time"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"part-time"}
                                                label={"Part time"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"internship-volunteer"}
                                                label={"Internship / Volunteer"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"project-seasonal"}
                                                label={"Project / Seasonal"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"law"}
                                                label={"Law"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Study Level</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"unqualified"}
                                                label={"Unqualified"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"qualified"}
                                                label={"Qualified"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Experience</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"without-experience"}
                                                label={"Without experience"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"entry-level-2-ani"}
                                                label={"Entry level (<2 ani)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"mid-level-2-5-years"}
                                                label={"Mid level (2-5 years)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"senior-level-5-years"}
                                                label={"Senior level (>5 years)"}
                                            />
                                            <Form.Check
                                                type={"checkbox"}
                                                id={"supervisor-chief"}
                                                label={"Supervisor / Chief"}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Industrie</Accordion.Header>
                                        <Accordion.Body >
                                            <Form.Control className="mb-3" type="text" placeholder="eg: Construction" />
                                            <div className="customHeight">
                                                <CustomScroll heightRelativeToParent="calc(100% - 10px)">
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"agricultural"}
                                                        label={"Agricultural"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"grocery-shop"}
                                                        label={"Grocery shop"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"cleaning"}
                                                        label={"Cleaning"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"trade-retail"}
                                                        label={"Trade / Retail"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"power"}
                                                        label={"Power"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"farmaceuticals"}
                                                        label={"Farmaceuticals"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"wood-pvc"}
                                                        label={"Wood / PVC"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"carsauto"}
                                                        label={"Cars / Auto"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"production"}
                                                        label={"Production"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"agricultural"}
                                                        label={"Agricultural"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"grocery-shop"}
                                                        label={"Grocery shop"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"cleaning"}
                                                        label={"Cleaning"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"trade-retail"}
                                                        label={"Trade / Retail"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"power"}
                                                        label={"Power"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"farmaceuticals"}
                                                        label={"Farmaceuticals"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"wood-pvc"}
                                                        label={"Wood / PVC"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"carsauto"}
                                                        label={"Cars / Auto"}
                                                    />
                                                    <Form.Check
                                                        type={"checkbox"}
                                                        id={"production"}
                                                        label={"Production"}
                                                    />
                                                </CustomScroll>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                        <Col xl={9} lg={9}>
                            <div className="top-information">
                                <div className="numberOfJobs"><strong>33524</strong> jobs</div>
                                <div className="sortingOpts">
                                    <Form.Check
                                        type="switch"
                                        id="hidden-switch"
                                        label="Hidden"
                                    />
                                    <Form.Check
                                        type="switch"
                                        id="already-applied-switch"
                                        label="Already Applied"
                                    />
                                    <Form.Check
                                        type={"checkbox"}
                                        id={"date"}
                                        label={"Date"}
                                    />
                                    <Form.Check
                                        type={"checkbox"}
                                        id={"distance"}
                                        label={"Distance"}
                                    />
                                </div>
                            </div>
                            <JobsListCompFun />
                        </Col>
                    </Row>
                </Container>
            </s.JobsListParent>
        </>
    );
};

export default JobsListFun;
