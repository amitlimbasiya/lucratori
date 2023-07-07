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

const LoginAsWorkerComponent = () => {
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
                        {/* Login (as worker) */}
                        <div className="dymamicPart">
                            <Image className="img-fluid" src={LogoIcon} alt="Lucratori Logo Shape" />
                            <h2>Login</h2>
                            <p>Login into your account and <br />Find the work you need</p>
                            <Link href="" className="outlineSocailBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.82 16.31"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M8.23,9.18l.46-3H5.83V4.31a1.49,1.49,0,0,1,1.68-1.6H8.82V.2A16.26,16.26,0,0,0,6.5,0,3.62,3.62,0,0,0,2.61,4V6.22H0v3H2.61v7.13H5.83V9.18Z" /></g></g></svg> Login with Facebook</Link>
                            <p>or</p>
                            <Form className="loginFrm">
                                <Form.Group controlId="formTelNumber" className="parentControl">
                                    <Form.Control type="tel" placeholder="Telephone No." />
                                </Form.Group>
                                <Form.Group controlId="formPassword" className="parentControl">
                                    <Form.Control type="password" placeholder="Password" />
                                    <Link href="" className="viewPassword"><Image src={EyeIcon} alt="EyeIcon" /></Link>
                                </Form.Group>
                                <Button type="submit" className="redBtn">Login</Button>
                            </Form>
                            <div className="refLinks">
                                I&nbsp;
                                <Link href={router.FORGOTPASSWORDWORKER}>forgot my password</Link> <br />
                                <Link href={router.REGISTER}>Create an account</Link>
                            </div>
                        </div>
                    </s.parentPart>
                </Container>
            </s.section>
        </>
    );
};

export default LoginAsWorkerComponent
