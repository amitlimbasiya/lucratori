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

const ResetPasswordAsWorkerComponent = () => {
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
                        {/* Password Reset (as worker) */}
                        <div className="dymamicPart">
                            <Image className="img-fluid" src={LogoIcon} alt="Lucratori Logo Shape" />
                            <h2>Password <br />Reset Code</h2>
                            <p>Enter the password reset code, which sent
                                to your registerd phone number</p>
                            <Form className="forgotFrm">
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Control className="text-center" type="text" placeholder="0" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Control className="text-center" type="text" placeholder="0" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Control className="text-center" type="text" placeholder="0" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Control className="text-center" type="text" placeholder="0" />
                                    </Form.Group>
                                </Row>
                                <Form.Group controlId="formNewPassword" className="parentControl">
                                    <Form.Control type="password" placeholder="New Password" />
                                    <Link href="" className="viewPassword"><Image src={EyeIcon} alt="EyeIcon" /></Link>
                                </Form.Group>
                                <Form.Group controlId="confirmPassword" className="parentControl">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                    <Link href="" className="viewPassword"><Image src={EyeIcon} alt="EyeIcon" /></Link>
                                </Form.Group>
                                <Button type="submit" className="redBtn mt-5">Reset Password</Button>
                            </Form>
                            <div className="refLinks">
                                <Link href={router.FORGOTPASSWORDWORKER}>Cancel</Link>
                            </div>
                        </div>
                    </s.parentPart>
                </Container>
            </s.section>
        </>
    );
};

export default ResetPasswordAsWorkerComponent
