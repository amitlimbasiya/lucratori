import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/login.style";
import router from "../../utils/router";
import Opportunities from "../../public/images/working-office.jpg";
import LogoIcon from "../../public/images/logo-icon.svg";
import LogoImage from "../../public/images/lucratori-logo.svg";
import EyeIcon from "../../public/images/eyeIcon.svg";
import BoxIcon from "../../public/images/box-icon.svg";
import MapIcon from "../../public/images/map-icon.svg";
import NoteIcon from "../../public/images/note-icon.svg";
import ActivityIcon from "../../public/images/activity-icon.svg";
import ContactIcon from "../../public/images/contact-icon.svg";
import MultiUserIcon from "../../public/images/multiuser-icon.svg";
import SingleUserIcon from "../../public/images/single-user-icon.svg";
import PlusIcon from "../../public/images/plus-icon.svg";

const RegisterAsCompnayComponent = () => {
    useEffect(() => {
        $("form").on("change", ".file-upload-field", function () {
            $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
        });
    }, [])

    return (
        <>
            <s.section className="Section">
                <div className="logoPartparent">
                    <Link href={"/"} className="logoPart"><Image src={LogoImage} alt="Logo" /></Link>
                </div>
                <Container>
                    <s.parentPart className="parentPart">
                        <div className="imgBox">
                            <Image src={Opportunities} alt="opportunities" />
                            <div className="overlayText stepBar">
                                <ul>
                                    <li id="account"><div className="roundShape active stepCheck"></div><strong>Step 1</strong> Identification</li>
                                    <li id="personal"><div className="roundShape active stepCheck"></div><strong>Step 2</strong> Activity</li>
                                    <li id="payment"><div className="roundShape active"></div><strong>Step 3</strong> Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dymamicPart">
                            <Form className="regiAsCompany">
                                {/* Step 1 */}
                                <div className="step1 d-none">
                                    <Row className="mb-sm-3 mb-4">
                                        <Col lg={12} className="text-start">
                                            <h5 className="headingLbl"><Image src={BoxIcon} alt="Box Icon" /> Company Details</h5>
                                        </Col>
                                        <Col lg={12} className="text-start">
                                            <Row>
                                                <Col lg={2}>
                                                    <Form.Group controlId="tel" className="parentControl">
                                                        <Form.Control placeholder="+00" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={10}>
                                                    <Form.Group controlId="cuiCfi" className="parentControl">
                                                        <Form.Control placeholder="CUI / CIF" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Form.Group as={Col} controlId="tradeRegisterNo" className="parentControl">
                                            <Form.Control placeholder="Trade Register No." />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="companyName" className="parentControl">
                                            <Form.Control placeholder="Company Name" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-sm-3 mb-4">
                                        <Col lg={12} className="text-start">
                                            <h5 className="headingLbl"><Image src={MapIcon} alt="Map Icon" /> Registered Office Address</h5>
                                        </Col>
                                        <Col lg={12} className="text-start">
                                            <Form.Group controlId="address" className="parentControl">
                                                <Form.Control placeholder="Street, number, etc" />
                                            </Form.Group>
                                        </Col>
                                        <Form.Group as={Col} controlId="cityAddress" className="parentControl">
                                            <Form.Select defaultValue="City">
                                                <option>City</option>
                                                <option>City 1</option>
                                                <option>City 2</option>
                                                <option>City 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="countryAddress" className="parentControl">
                                            <Form.Select defaultValue="Country">
                                                <option>Country</option>
                                                <option>Country 1</option>
                                                <option>Country 2</option>
                                                <option>Country 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-sm-3 mb-4">
                                        <Col lg={12} className="text-start">
                                            <h5 className="headingLbl"><Image src={NoteIcon} alt="Note Icon" /> Data for authentication</h5>
                                        </Col>
                                        <Col lg={12} className="text-start">
                                            <Form.Group controlId="userName" className="parentControl">
                                                <Form.Control placeholder="Username" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="mb-sm-3 mb-4">
                                        <Form.Group as={Col} controlId="Password" className="parentControl">
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="Confirm Password" className="parentControl">
                                            <Form.Control type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} controlId="formHorizontalCheck" className="parentControl text-start customCheck">
                                            <Form.Check label={
                                                <span>
                                                    To continue, please confirm that you agree to the
                                                    lucratori’s&nbsp;
                                                    <a href="" target="_blank" rel="noopener noreferrer">
                                                        Terms and Conditions
                                                    </a>
                                                </span>
                                            } />
                                        </Form.Group>
                                    </Row>
                                    <Button type="submit" className="redBtn mt-3">Step 2 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.68 10.11"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M.52.26.3.47,4.82,5a.16.16,0,0,1,0,.19L.3,9.66l.22.21a.17.17,0,0,0,.19,0L5.42,5.16a.14.14,0,0,0,0-.19L.71.26a.12.12,0,0,0-.19,0Z" /></g></g></svg></Button>
                                </div>
                                {/* Step 2 */}
                                <div className="step2 d-none">
                                    <Row className="mb-sm-3 mb-4">
                                        <Col lg={12} className="text-start">
                                            <h5 className="headingLbl"><Image src={ActivityIcon} alt="Activity Icon" /> AcTIVITY</h5>
                                        </Col>
                                    </Row>
                                    <Row className="mb-sm-3 mb-4">
                                        <Form.Group as={Col} controlId="activityDescription" className="parentControl">
                                            <Form.Control placeholder="Activity Description" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-sm-3 mb-4">
                                        <Form.Group as={Col} controlId="noEmployees" className="parentControl">
                                            <Form.Control placeholder="No. Employees" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="siteLink" className="parentControl">
                                            <Form.Control placeholder="Site Link" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-sm-3 mb-4">
                                        <Form.Group controlId="formFile" className="mb-3 file-upload-wrapper" data-text="Logo/Profile Picture">
                                            <Form.Control type="file" className="file-upload-field" value="" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-sm-3 mb-4">
                                        <Col lg={12} className="text-start">
                                            <h5 className="headingLbl"><Image src={ContactIcon} alt="Contact Icon" /> Contact details</h5>
                                        </Col>
                                    </Row>
                                    <Row className="mb-sm-3 mb-4">
                                        <Form.Group as={Col} controlId="regFN" className="parentControl">
                                            <Form.Control placeholder="First Name" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="regLN" className="parentControl">
                                            <Form.Control placeholder="Last Name" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-sm-3 mb-4">
                                        <Form.Group as={Col} controlId="regEmailAddress" className="parentControl">
                                            <Form.Control placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="regPhoneNo" className="parentControl">
                                            <Form.Control placeholder="Phone No" />
                                        </Form.Group>
                                    </Row>
                                    <Button type="submit" className="redBtn mt-sm-3 mt-4">Step 3 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.68 10.11"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M.52.26.3.47,4.82,5a.16.16,0,0,1,0,.19L.3,9.66l.22.21a.17.17,0,0,0,.19,0L5.42,5.16a.14.14,0,0,0,0-.19L.71.26a.12.12,0,0,0-.19,0Z" /></g></g></svg></Button>
                                </div>
                                {/* Step 3 */}
                                <div className="step3">
                                    <Row className="mb-3">
                                        <Col lg={12} className="text-start">
                                            <h5 className="headingLbl"><Image src={MultiUserIcon} alt="Multi User Icon" /> Defining Accounts</h5>
                                            <p className="subHeading">(if you want to divide email addresses into departments,
                                                branches, etc., fill in the fields below, <small>e.g.:LugeraHR@lucratori.ro + LugeraPayroll@lucratori.ro</small>)</p>
                                        </Col>
                                    </Row>
                                    <div className="accountGroup">
                                        <Row className="mb-3">
                                            <Col lg={12} className="text-start">
                                                <h5 className="headingLbl"><Image src={SingleUserIcon} alt="Signle User Icon" /> Account 1</h5>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col lg={12} className="mb-3">
                                                <Form.Group controlId="emailaddress" className="parentControl">
                                                    <Form.Control type="email" placeholder="Email" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <Form.Group controlId="Password" className="parentControl">
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <Form.Group controlId="Confirm Password" className="parentControl">
                                                    <Form.Control type="password" placeholder="Confirm Password" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="accountGroup">
                                        <Row className="mb-sm-3 mb-4">
                                            <Col lg={12} className="text-start">
                                                <h5 className="headingLbl"><Image src={SingleUserIcon} alt="Signle User Icon" /> Account 2 <Link className="addItem" href={"/"}><Image src={PlusIcon} alt="Plus Icon" /></Link></h5>
                                            </Col>
                                        </Row>
                                        <Row className="mb-sm-3 mb-4 d-none">
                                            <Col lg={12} className="mb-3">
                                                <Form.Group controlId="emailaddress" className="parentControl">
                                                    <Form.Control type="email" placeholder="Email" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <Form.Group controlId="Password" className="parentControl">
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <Form.Group controlId="Confirm Password" className="parentControl">
                                                    <Form.Control type="password" placeholder="Confirm Password" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Button type="submit" className="redBtn mt-3">Register Now</Button>
                                </div>
                            </Form>
                            <div className="refLinks">Already registered? Click here to <Link href={router.LOGINASCOMPANY}>Login</Link></div>
                        </div>
                    </s.parentPart>
                </Container >
            </s.section >
        </>
    );
};

export default RegisterAsCompnayComponent
