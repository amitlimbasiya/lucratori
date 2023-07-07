import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/search-candidates";
import SearchIcon from "../../public/images/search-icon.svg";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const SearchCandidateFun = () => {

    return (
        <>
            <s.SearchParent className="searchParent">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="searchPart">
                                <h3>Search Through the Database</h3>
                                <s.SearchHorizontal className="searchHorizontal">
                                    <s.WhiteBox className="whiteBox">
                                        <div className="beforeIcon keywordField">
                                            <Image src={SearchIcon} alt="Search Icon" />
                                            <Form.Control type="text" placeholder="Keywords or advanced search operators" />
                                        </div>
                                    </s.WhiteBox>
                                    <Button type="submit" className="redBtn">Search</Button>
                                </s.SearchHorizontal>
                            </div>
                            <div className="searchPart">
                                <div className="headingPart">Search Filters</div>
                                <Form>
                                    <Row>
                                        <Col md={6} className="pe-xl-5">
                                            <Form.Group controlId="entireCV" className="feelbleControl">
                                                <Form.Label>Entire CV</Form.Label>
                                                <Form.Select className="feelble" defaultValue="Search through all CVs">
                                                    <option>Search through all CVs</option>
                                                    <option>City 1</option>
                                                    <option>City 2</option>
                                                    <option>City 3</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="ps-xl-5">
                                            <Form.Group controlId="IndustrySearch" className="feelbleControl">
                                                <Form.Label>Industry</Form.Label>
                                                <Form.Select className="feelble" defaultValue="Search through all CVs">
                                                    <option>Search through all CVs</option>
                                                    <option>City 1</option>
                                                    <option>City 2</option>
                                                    <option>City 3</option>
                                                </Form.Select>
                                                {/* <div className="addRemoveField">
                                                    <Link href=""><HighlightOffOutlinedIcon /> Remove <ControlPointIcon /> Add another department</Link>
                                                </div> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="pe-xl-5">
                                            <Form.Group controlId="searchByType" className="feelbleControl">
                                                <Form.Label>Search Type</Form.Label>
                                                <Form.Select className="feelble" defaultValue="Search through all the names of jobs and employers">
                                                    <option>Search through all the names of jobs and employers</option>
                                                    <option>City 1</option>
                                                    <option>City 2</option>
                                                    <option>City 3</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="ps-xl-5">
                                            <Form.Group controlId="cityCandidateBySearch" className="feelbleControl">
                                                <Form.Label>City of the Candidate</Form.Label>
                                                <Form.Select className="feelble" defaultValue="Select the city">
                                                    <option>Select the city</option>
                                                    <option>City 1</option>
                                                    <option>City 2</option>
                                                    <option>City 3</option>
                                                </Form.Select>
                                                {/* <div className="addRemoveField">
                                                    <Link href=""><HighlightOffOutlinedIcon /> Remove <ControlPointIcon /> Add another department</Link>
                                                </div> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="pe-xl-5">
                                            <Form.Group controlId="entireCV" className="feelbleControl">
                                                <Form.Label>Database</Form.Label>
                                                <Form.Select className="feelble" defaultValue="The entire database">
                                                    <option>The entire database</option>
                                                    <option>City 1</option>
                                                    <option>City 2</option>
                                                    <option>City 3</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="ps-xl-5">
                                            <Row>
                                                <Col md={8}>
                                                    <Form.Group controlId="languagesBySearch" className="feelbleControl mb-3 mb-md-0">
                                                        <Form.Label>Languages spoken</Form.Label>
                                                        <Form.Select className="feelble" defaultValue="All languages">
                                                            <option>All languages</option>
                                                            <option>City 1</option>
                                                            <option>City 2</option>
                                                            <option>City 3</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Group controlId="languagesBySearch" className="feelbleControl mb-0">
                                                        <Form.Label className="d-none d-md-flex">&nbsp;</Form.Label>
                                                        <Form.Select className="feelble" defaultValue="Beginner">
                                                            <option>Beginner</option>
                                                            <option>City 1</option>
                                                            <option>City 2</option>
                                                            <option>City 3</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                {/* <div className="addRemoveField">
                                                    <Link href=""><HighlightOffOutlinedIcon /> Remove <ControlPointIcon /> Add another department</Link>
                                                </div> */}
                                            </Row>
                                        </Col>
                                        <Col className="text-lg-end mt-4 mt-lg-5">
                                            <Button type="submit" className="redBtn bigBtn">Search</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div className="searchPart">
                                <h3>Saved Searches</h3>
                                <s.SearchHorizontal className="searchHorizontal">
                                    <Form.Group controlId="entireCV" className="feelbleControl mb-0 w-100">
                                        <Form.Select className="feelble" defaultValue="Select a saved search">
                                            <option>Select a saved search</option>
                                            <option>City 1</option>
                                            <option>City 2</option>
                                            <option>City 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button type="submit" className="redBtn">Search</Button>
                                </s.SearchHorizontal>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </s.SearchParent>
        </>
    );
};

export default SearchCandidateFun;
