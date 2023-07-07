import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import * as s from "../../src/styles/employer-inner-header.style";
import SearchIcon from "../../public/images/search-icon.svg";

const EmployerJobsInnerHeader = () => {
    return (
        <>
            <s.EmployerJobsListingSection className="ejls">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} lg={7} className="mb-3 mb-md-0">
                            <div className="headingPart">
                                <h1>All jobs</h1>
                            </div>
                        </Col>
                        <Col md={6} lg={5}>
                            <s.SearchHorizontal className="searchHorizontal">
                                <s.WhiteBox className="whiteBox">
                                    <div className="beforeIcon keywordField">
                                        <Image src={SearchIcon} alt="Search Icon" />
                                        <Form.Control type="text" placeholder="Search by ad name or id" />
                                    </div>
                                </s.WhiteBox>
                                <Button type="submit" className="redBtn">Search</Button>
                            </s.SearchHorizontal>
                        </Col>
                    </Row>
                </Container>
            </s.EmployerJobsListingSection>
        </>
    );
};

export default EmployerJobsInnerHeader;
