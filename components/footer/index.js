import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/footer.style";
import FTLogoImage from "../../public/images/footer-lucratori-logo.svg";

const Footer = () => {
  return (
    <>
      <s.footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col className="text-center text-sm-start" sm={6} md={3} lg={3} xl={3} >
              <Link href="/">
                <Image className="img-fluid" src={FTLogoImage} alt="Logo" />
              </Link>
            </Col>
            <Col className="text-center text-sm-end text-md-center ftLinks mt-4 mt-sm-0 mt-md-0" sm={6} md={5} lg={5} xl={6}>
              <Link href="#">About</Link>
              <Link href="#">Jobs</Link>
              <Link href="#">Employee</Link>
            </Col>
            <Col className="text-center text-md-end ftSocial mt-4 mt-md-0" sm={12} md={4} lg={4} xl={3}>
              Follow us
              <Link href="/">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.91 22.02"><path d="M208.91,159.54l.63-4h-3.86V153a2,2,0,0,1,2.26-2.15h1.78v-3.39a20.45,20.45,0,0,0-3.13-.27c-3.18,0-5.26,1.91-5.26,5.36v3h-3.52v4h3.52v9.64h4.35v-9.64Z" transform="translate(-197.81 -147.16)" /></svg>
              </Link>
              <Link href="/">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.41 17.62"><path d="M263.47,167V155.14h-4V167Zm-2-13.51a2.06,2.06,0,1,0-2.21-2.05,2.06,2.06,0,0,0,2.21,2.05ZM265.65,167h4v-6.64a2.79,2.79,0,0,1,.13-1,2.17,2.17,0,0,1,2-1.45c1.42,0,2,1.09,2,2.69V167h3.95v-6.82c0-3.65-1.95-5.35-4.54-5.35a3.94,3.94,0,0,0-3.59,2h0v-1.72h-4c.06,1.12,0,11.89,0,11.89Z" transform="translate(-259.29 -149.41)" /></svg>
              </Link>
              <Link href="/">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.46 18.53"><path d="M344.45,151.14a8.66,8.66,0,0,1-2.27.65c.36-.06.9-.72,1.12-1a4.47,4.47,0,0,0,.73-1.36s0-.09,0-.11l-.06,0-.06,0a11.44,11.44,0,0,1-2.69,1h-.1a.11.11,0,0,1-.09,0,2.72,2.72,0,0,0-.24-.24,4.94,4.94,0,0,0-1.28-.83,4.44,4.44,0,0,0-2-.33,4.83,4.83,0,0,0-4.32,3.63,5,5,0,0,0-.05,1.93c0,.11,0,.13-.09.11a14.38,14.38,0,0,1-9.28-4.71c-.11-.13-.17-.13-.26,0a4.73,4.73,0,0,0,.8,5.56,6.68,6.68,0,0,0,.57.49,4.69,4.69,0,0,1-1.79-.49c-.1-.07-.16,0-.16.09a2.35,2.35,0,0,0,0,.53,4.76,4.76,0,0,0,2.92,3.78,3.09,3.09,0,0,0,.59.18,5.4,5.4,0,0,1-1.75.06c-.12,0-.17,0-.12.16a4.94,4.94,0,0,0,3.65,3.08c.17,0,.34,0,.53.07l0,0c-.36.66-1.82,1.11-2.49,1.34a9.14,9.14,0,0,1-3.81.49c-.21,0-.26,0-.31,0s0,.08.06.13a7.14,7.14,0,0,0,.79.47,12,12,0,0,0,2.55,1,13.6,13.6,0,0,0,13.19-3.09c2.71-2.69,3.66-6.4,3.66-10.11,0-.14.17-.22.27-.3a8.58,8.58,0,0,0,1.79-1.87.51.51,0,0,0,.13-.37C344.55,151.09,344.55,151.1,344.45,151.14Z" transform="translate(-322.09 -148.92)" /></svg>
              </Link>
            </Col>
          </Row>
        </Container>
      </s.footer>
      <s.copyPart className="copyPart">
        <Container>
          <Row>
            <Col sm={12} md={6} className="text-center text-md-start">
              <p>Lucratori.ro © 2015 — 2023</p>
            </Col>
            <Col sm={12} md={6} className="text-center text-md-end">
              <Link href="#">Term and Conditions</Link>
              <Link href="#">Privacy policy</Link>
            </Col>
          </Row>
        </Container>
      </s.copyPart>
    </>
  );
};

export default Footer;
