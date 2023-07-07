import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import * as s from "../../src/styles/candidate-inner-header.style";
import SearchIcon from "../../public/images/search-icon.svg";

const CandidateSearch = () => {
    return (
        <>
            <s.CandidateSection>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={3} sm={6}>
                            <div className="headingPart">
                                <h1>My Applications</h1>
                                <p>6 applications</p>
                            </div>
                        </Col>
                        <Col lg={6} xs={{ span: 12, order: 1 }} className="mt-3 mt-lg-0">
                            <s.SearchHorizontal className="searchHorizontal">
                                <s.WhiteBox className="whiteBox">
                                    <div className="beforeIcon keywordField">
                                        <Image src={SearchIcon} alt="Search Icon" />
                                        <Form.Control type="text" placeholder="Keywords" />
                                    </div>
                                </s.WhiteBox>
                                <Button type="submit" className="redBtn">Search</Button>
                            </s.SearchHorizontal>
                        </Col>
                        <Col lg={3} sm={6} className="mt-3 mt-sm-0">
                            <div className="sortingOpts">
                                <Form.Check
                                    type={"checkbox"}
                                    id={"sent"}
                                    label={"Sent"}
                                />
                                <Form.Check
                                    type={"checkbox"}
                                    id={"viewed"}
                                    label={"Viewed"}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </s.CandidateSection>
        </>
    );
};

export default CandidateSearch;
