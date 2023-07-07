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

const LoginAsCompanyComponent = () => {
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
                        {/* Login (as company) */}
                        <div className="dymamicPart ">
                            <Image className="img-fluid" src={LogoIcon} alt="Lucratori Logo Shape" />
                            <h2>Login</h2>
                            <p>Login into your account and <br /> Find the talent you need</p>
                            <Form className="loginFrm">
                                <Form.Group controlId="formEmail" className="parentControl">
                                    <Form.Control type="email" placeholder="Username or Email" />
                                </Form.Group>
                                <Form.Group controlId="formPassword" className="parentControl">
                                    <Form.Control type="password" placeholder="Password" />
                                    <Link href="" className="viewPassword"><Image src={EyeIcon} alt="EyeIcon" /></Link>
                                </Form.Group>
                                <Button type="submit" className="redBtn">Login</Button>
                            </Form>
                            <div className="refLinks">
                                I&nbsp;
                                <Link href={router.FORGOTPASSWORDCOMPANY}>forgot my password</Link> <br />
                                <Link href={router.REGISTER}>Create an account</Link>
                            </div>
                        </div>
                    </s.parentPart>
                </Container>
            </s.section>
        </>
    );
};

export default LoginAsCompanyComponent
