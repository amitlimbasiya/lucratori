import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/login.style";
import Opportunities from "../../public/images/working-office.jpg";
import router from "../../utils/router";
import LogoIcon from "../../public/images/logo-icon.svg";
import LogoImage from "../../public/images/lucratori-logo.svg";


const Login = () => {
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
                            <Image className="img-fluid" src={LogoIcon} alt="Lucratori Logo Shape" />
                            <h2>Login</h2>
                            <p>Login into your account and <br />Find the work you need</p>
                            <Link href={router.LOGINASWORKER} className="redBtn">As a Worker</Link>
                            <p className="my-2">or</p>
                            <Link href={router.LOGINASCOMPANY} className="redBtn">As a Company</Link>
                        </div>
                    </s.parentPart>
                </Container>
            </s.section>
        </>
    );
};

export default Login
