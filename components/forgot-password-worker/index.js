import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/login.style";
import router from "../../utils/router";
import Opportunities from "../../public/images/working-office.jpg";
import LogoIcon from "../../public/images/logo-icon.svg";
import LogoImage from "../../public/images/lucratori-logo.svg";

const ForgotPasswordAsWorkerComponent = () => {
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
                        {/* Forgot Password (as worker) */}
                        <div className="dymamicPart">
                            <Image className="img-fluid" src={LogoIcon} alt="Lucratori Logo Shape" />
                            <h2>Forgot your <br />password?</h2>
                            <p>Enter the phone number associated with your
                                Lucratori account and we'll immediately
                                send you a reset code</p>
                            <Form className="forgotFrm">
                                <Form.Group controlId="formTelNumber" className="parentControl mb-5">
                                    <Form.Control type="tel" placeholder="Telephone No." />
                                </Form.Group>
                                <Button type="submit" className="redBtn" href={router.RESETPASSWORDWORKER}>Send me reset code</Button>
                            </Form>
                            <div className="refLinks">
                                <Link href={router.LOGINASWORKER}>Cancel</Link>
                            </div>
                        </div>
                    </s.parentPart>
                </Container>
            </s.section>
        </>
    );
};

export default ForgotPasswordAsWorkerComponent
