import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import router from "../../utils/router";
import * as s from "../../src/styles/header.style";
import LogoImage from "../../public/images/lucratori-logo.svg";
import userImg from "../../public/images/user.png";


const Header = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <>
      <s.Header className="header">
        <Navbar collapseOnSelect expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <Image src={LogoImage} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href={router.JOBS}>Jobs</Nav.Link>
                <Nav.Link href="#">Employee</Nav.Link>
                <div className="headerRight smShow">
                  <Link href={router.REGISTER}>Register</Link>
                  <Link href={router.LOGIN} className="redBtn">Login</Link>
                </div>
              </Nav>
            </Navbar.Collapse>
            <div className="headerRight smHide">
              <Link href={router.REGISTER}>Register</Link>
              <Link href={router.LOGIN} className="redBtn">Login</Link>
            </div>
            <div className="userAccount d-none">
              <Link href="" onClick={toggle}>
                <div className="userImg">
                  <Image src={userImg} alt="Logo" />
                </div>
                <div className="userDataInfo">
                  <span className="userName">John Doe</span>
                  <span className="userPosition">Designer</span>
                </div>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 436.36"><path d="M789.35,192.47a36.37,36.37,0,0,0-51.43,0L400,530.39,62.08,192.47A36.37,36.37,0,0,0,10.65,243.9L374.3,607.53a36.36,36.36,0,0,0,51.42,0L789.35,243.89A36.36,36.36,0,0,0,789.35,192.47Z" transform="translate(0 -181.82)" /></svg>
              </Link>
            </div>
            <div className="userDataShow" style={{
              display: showMe ? "block" : "none"
            }}>
              <Row>
                <Col>
                  <div className="columnData">
                    <h2>My Account</h2>
                    <ul>
                      <li><Link href="">My CV</Link></li>
                      <li><Link href="">Jobs</Link></li>
                      <li><Link href="">My Applications</Link></li>
                      <li><Link href="">Interviews</Link></li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="columnData">
                    <h2>Actions</h2>
                    <ul>
                      <li><Link href="">Saved Jobs</Link></li>
                      <li><Link href="">Hidden Jobs</Link></li>
                      <li><Link href="">Hidden Companies</Link></li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="columnData">
                    <h2>Miscellaneous</h2>
                    <ul>
                      <li><Link href="">Account Settings</Link></li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="columnData">
                    <h2>Support</h2>
                    <ul>
                      <li><Link href="">Contact Us</Link></li>
                      <li><Link href="">FAQ</Link></li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="text-md-end my-3">
                  <Link href="" className="redBtn">Logout</Link>
                </Col>
              </Row>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Container>
        </Navbar>
      </s.Header>
    </>
  );
};

export default Header;
