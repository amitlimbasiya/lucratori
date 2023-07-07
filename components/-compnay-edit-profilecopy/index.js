import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/emp-jobs-listing";
import Tabs from 'react-responsive-tabs-tmp';
import JobListData from "../job-list-data";

const presidents = [
    { name: ['All Jobs', <span className="count">517</span>], biography: JobListData() },
    { name: ['Active Jobs', <span className="count">227</span>], biography: JobListData() },
    { name: ['Inactive Jobs', <span className="count">7</span>], biography: JobListData() },
    { name: ['Saved Jobs', <span className="count">87</span>], biography: '' },
];

function getTabs() {
    return presidents.map(president => ({
        tabClassName: 'tab', // Optional
        panelClassName: 'panel', // Optional
        title: president.name,
        getContent: () => president.biography,
    }));
}
const AllJobsSection = () => {

    return (
        <>
            <s.MyJobsListParent className="myJobsListParent">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Tabs items={getTabs()} />
                        </Col>
                    </Row>
                </Container>
            </s.MyJobsListParent>
        </>
    );
};

export default AllJobsSection;
