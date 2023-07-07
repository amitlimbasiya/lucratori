import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";


const CompnayInfo = () => {
    return (
        <>
            <Form>
                <div className="bordaredHeading">
                    <h3>Company Information</h3>
                    <p>* All fields marked by asterisk (*) are mandatory</p>
                </div>
                <div className="feelableFormPart">
                    <Row>
                        <Col lg={10} className="mx-auto my-md-4">
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="compnayName" className="parentControl feelbleControl">
                                        <Form.Label>Company Name*</Form.Label>
                                        <Form.Control className="feelble" placeholder="Google LLC" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="companyCountry" className="parentControl feelbleControl">
                                        <Form.Label>Country *</Form.Label>
                                        <Form.Control className="feelble" placeholder="United States" />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group controlId="fiscalAttribute" className="feelbleControl">
                                        <Form.Label>Registered Office Address*</Form.Label>
                                        <Form.Control className="feelble" as="textarea" placeholder="1600 Amphitheatre Parkway in Mountain View, California" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="companyCif" className="parentControl feelbleControl">
                                        <Form.Label>CIF *</Form.Label>
                                        <Form.Control className="feelble" placeholder="12345678" />
                                    </Form.Group>

                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group as={Col} controlId="companyTime" className="parentControl feelbleControl">
                                        <Form.Label>Time *</Form.Label>
                                        <Form.Control className="feelble" placeholder="Washington, DC, USA (GMT-4)" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="compnayBankAccount" className="parentControl feelbleControl">
                                        <Form.Label>Bank Account</Form.Label>
                                        <Form.Control className="feelble" placeholder="RO24CITI0000000799718006" />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group controlId="fiscalAttribute" className="feelbleControl">
                                        <Form.Label>Fiscal Attribute *</Form.Label>
                                        <Form.Select className="feelble" defaultValue="Search through all CVs">
                                            <option>Search through all CVs</option>
                                            <option>City 1</option>
                                            <option>City 2</option>
                                            <option>City 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="companyTelephone" className="parentControl feelbleControl">
                                        <Form.Label>Telephone *</Form.Label>
                                        <Form.Control className="feelble" placeholder="+4213187120" />
                                    </Form.Group>

                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group as={Col} controlId="companyBankBranch" className="parentControl feelbleControl">
                                        <Form.Label>Bank Branch</Form.Label>
                                        <Form.Control className="feelble" placeholder="Citibank California" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="companyWebsite" className="parentControl feelbleControl">
                                        <Form.Label>Website</Form.Label>
                                        <Form.Control className="feelble" placeholder="www.lugera.com" />
                                    </Form.Group>

                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group as={Col} controlId="companyEmail" className="parentControl feelbleControl">
                                        <Form.Label>Email *</Form.Label>
                                        <Form.Control className="feelble" placeholder="lugera@lugera.ro" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="bordaredHeading">
                    <h3>Activity</h3>
                </div>
                <div className="feelableFormPart">
                    <Row>
                        <Col lg={10} className="mx-auto my-md-4">
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="compnayName" className="parentControl feelbleControl">
                                        <Form.Label>Business Level</Form.Label>
                                        <Form.Select className="feelble" defaultValue="International">
                                            <option>Local</option>
                                            <option>National</option>
                                            <option selected>International</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group as={Col} controlId="companyActivityEmployees" className="parentControl feelbleControl">
                                        <Form.Label>No. of Employees *</Form.Label>
                                        <Form.Control className="feelble" placeholder="over 100 employees" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="compnayName" className="parentControl feelbleControl">
                                        <Form.Label>Areas of Activity * <small className="d-block">Select multiple options by holding down the CTRL key</small></Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group as={Col} controlId="companyActivityEmployees" className="parentControl feelbleControl">
                                        <Form.Label>Industries * <small className="d-block">Select multiple options by holding down the CTRL key</small></Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="compnayName" className="parentControl feelbleControl">
                                        <Form.Label>Cities of Activity * <small className="d-block">Select multiple options by holding down the CTRL key</small></Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="bordaredHeading">
                    <h3>Contact Details</h3>
                    <p>the person who will keep in touch with Lucratori</p>
                </div>
                <div className="feelableFormPart">
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="compnayContactName" className="parentControl feelbleControl">
                                        <Form.Label>Name *</Form.Label>
                                        <Form.Control className="feelble" placeholder="Cristina Savuica/Razvan Savu" />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group as={Col} controlId="companyContactFunction" className="parentControl feelbleControl">
                                        <Form.Label>Function *</Form.Label>
                                        <Form.Control className="feelble" placeholder="ManagerHR" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="companyContactTelephone" className="parentControl feelbleControl">
                                        <Form.Label>Telephone *</Form.Label>
                                        <Form.Control className="feelble" placeholder="(021)3187120/0726222506" />
                                    </Form.Group>

                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group as={Col} controlId="companyContactEmail" className="parentControl feelbleControl">
                                        <Form.Label>Email *</Form.Label>
                                        <Form.Control className="feelble" placeholder="razvan.savu@lugera.ro" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group as={Col} controlId="companyContactMailingAddress" className="parentControl feelbleControl">
                                        <Form.Label>Company Mailing Address *</Form.Label>
                                        <Form.Control className="feelble" as="textarea" placeholder="Str. Vulturilor, nr. 98, etj. P, 1, 2, 3, 4, Sector 3, BUCURESTI" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="pe-md-4">
                                    <Form.Group as={Col} controlId="companyContactCountry" className="parentControl feelbleControl">
                                        <Form.Label>Country *</Form.Label>
                                        <Form.Control className="feelble" placeholder="United States" />
                                    </Form.Group>

                                </Col>
                                <Col md={6} className="ps-md-4">
                                    <Form.Group as={Col} controlId="companyTime" className="parentControl feelbleControl">
                                        <Form.Label>Time *</Form.Label>
                                        <Form.Control className="feelble" placeholder="Washington, DC, USA (GMT-4)" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br className="d-none d-md-block" /><br className="d-none d-md-block" />
                            <Row>
                                <Col sm={12} className="pe-md-4">
                                    <Form.Group as={Col} controlId="companyContactCountry" className="parentControl feelbleControl">
                                        <Form.Label><strong>Company Settings</strong></Form.Label>
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"allowSettings"}
                                            label={"Allow ads to be displayed on partner sites"}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br className="d-none d-md-block" /><br className="d-none d-md-block" />
                            <Row>
                                <Col sm={12} className="text-center"><Button className="redBtn">Save Details</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Form>
        </>
    );
};

export default CompnayInfo;
