import React, { useEffect, useState } from "react";
import { Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import companyLogo from "public/images/companie-1.jpg";
import VerifiedIcon from "public/images/verified-icon.svg";


const CompnayHeader = () => {

    return (
        <>
            <div className="compnayHeader">
                <Container>
                    <Row>
                        <Col className="px-md-3 px-0">
                            <Navbar collapseOnSelect expand="md">
                                <div className="compnayProfile">
                                    <Image src={companyLogo} alt="Logo" />
                                </div>
                                <div className="compnay-sort-info">
                                    <Link href="">Google LLC</Link>
                                    <span><Image src={VerifiedIcon} alt="Veried Company" /> Verified Company</span>
                                </div>
                                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end compnayMenu">
                                    <Nav>
                                        <Nav.Link href="#companyAbout">About</Nav.Link>
                                        <Nav.Link href="#companyJobs">Jobs</Nav.Link>
                                        <Nav.Link href="#companySocial">Social</Nav.Link>
                                        <Nav.Link href="#companyContact">Contacts</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    );
};

export default CompnayHeader;
