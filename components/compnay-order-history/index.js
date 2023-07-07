import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Tabs from 'react-responsive-tabs-tmp';
import InvoiceHistoryData from "../company-invoice-history";
import InvoiceServicesHistoryData from "../company-services-history";

const TabCompo = [
    { name: ['Invoices History'], biography: InvoiceHistoryData() },
    { name: ['Services History'], biography: InvoiceServicesHistoryData() },
];

function getTabsEdit() {
    return TabCompo.map(president => ({
        tabClassName: 'tab', // Optional
        panelClassName: 'panel', // Optional
        title: president.name,
        getContent: () => president.biography,
    }));
}
const CompnayOrderHistoryFun = () => {

    return (
        <>
            <div className="companyEditProfile compnayOrderHistory">
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

export default CompnayOrderHistoryFun;
