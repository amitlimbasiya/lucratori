import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/login.style";
import Opportunities from "../../public/images/working-office.jpg";
import LogoIcon from "../../public/images/logo-icon.svg";
import LogoImage from "../../public/images/lucratori-logo.svg";
import router from "../../utils/router";

const RegisterAsWorkerComponent = () => {
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
                            <div className="overlayText">
                                <h2>Over 1000 Opportunities in One Place</h2>
                                <p>Choose from over 1000 employers and 5000 jobs. Find your dream job and apply. We take care of the rest!</p>
                            </div>
                        </div>
                        <div className="dymamicPart">
                            <div className="mb-4">
                                <Image className="img-fluid" src={LogoIcon} alt="Lucratori Logo Shape" />
                            </div>
                            <Link href="" className="outlineSocailBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.82 16.31"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M8.23,9.18l.46-3H5.83V4.31a1.49,1.49,0,0,1,1.68-1.6H8.82V.2A16.26,16.26,0,0,0,6.5,0,3.62,3.62,0,0,0,2.61,4V6.22H0v3H2.61v7.13H5.83V9.18Z" /></g></g></svg> Register with Facebook</Link>
                            <p>or</p>
                            <Form className="loginFrm">
                                <Row>
                                    <Form.Group as={Col} controlId="First Name" className="parentControl">
                                        <Form.Control placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="Last Name" className="parentControl">
                                        <Form.Control placeholder="Last Name" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} controlId="Telephone No" className="parentControl">
                                        <Form.Control placeholder="Telephone No" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="cityResidence" className="parentControl">
                                        <Form.Select defaultValue="City of Residence">
                                            <option>City of Residence</option>
                                            <option>City of Residence 1</option>
                                            <option>City of Residence 2</option>
                                            <option>City of Residence 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row>
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
                                                <a href="" rel="noopener noreferrer">
                                                    Terms and Conditions
                                                </a>
                                            </span>
                                        } />
                                    </Form.Group>
                                </Row>
                                <Button type="submit" className="redBtn mt-3">Register Now</Button>
                            </Form>
                            <div className="refLinks">Already registered? Click here to <Link href={router.LOGINASWORKER}>Login</Link></div>
                        </div>
                    </s.parentPart>
                </Container>
            </s.section >
        </>
    );
};

export default RegisterAsWorkerComponent
