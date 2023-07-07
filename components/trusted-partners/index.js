import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/trustedPartner.style";
import GoogleIcon from "../../public/images/google-icon.svg";
import MicrosoftIcon from "../../public/images/microsoft-icon.svg";
import AppleIcon from "../../public/images/apple-icon.svg";
import MetaIcon from "../../public/images/meta-icon.svg";
import AmezonIcon from "../../public/images/amezon-icon.svg";

const Trusted = () => {
  return (
    <>
      <s.trustedPartner className="trustedPartner">
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className="partnerGrid">
                <div className="lableText">Trusted by:</div>
                <Image src={GoogleIcon} alt="Google Logo" />
                <Image src={MicrosoftIcon} alt="Microsoft Logo" />
                <Image src={AppleIcon} alt="Apple Logo" />
                <Image src={MetaIcon} alt="Meta Logo" />
                <Image src={AmezonIcon} alt="Amezon Logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </s.trustedPartner>
    </>
  );
};

export default Trusted;
