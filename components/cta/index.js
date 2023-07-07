import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/cta.style";
import UserMan from "../../public/images/cta-man.png";

const CTA = () => {
  return (
    <>
      <s.CtaSection className="ctaSection">
        <Container>
          <Row className="align-items-center">
            <Col xl={7} lg={8} className="cta-text pe-lg-5">
              <h3>Over 1000 Opportunities in One Place</h3>
              <p>Choose from over 1000 employers and 5000 jobs. <br />Find your dream job and apply. We take care of the rest!</p>
              <Link href="#" className="whiteBtn">Join Now</Link>
            </Col>
            <Col xl={5} lg={4} className="text-lg-end text-center img-part">
              <Image placeholder="blur" src={UserMan} alt="Man" />
            </Col>
          </Row>
        </Container>
      </s.CtaSection>
    </>
  );
};

export default CTA;
