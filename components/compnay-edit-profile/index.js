import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/emp-jobs-listing";
import Tabs from 'react-responsive-tabs-tmp';
import CompnayInfo from "../compnay-information";
import CompnayEditChangePass from "../compnay-edit-change-password";

const TabCompo = [
    { name: ['Company Info'], biography: CompnayInfo() },
    { name: ['Change Password'], biography: CompnayEditChangePass() },
];

function getTabsEdit() {
    return TabCompo.map(president => ({
        tabClassName: 'tab', // Optional
        panelClassName: 'panel', // Optional
        title: president.name,
        getContent: () => president.biography,
    }));
}
const CompnayProfileEdits = () => {

    return (
        <>
            <div className="companyEditProfile">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Tabs items={getTabsEdit()} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default CompnayProfileEdits;
