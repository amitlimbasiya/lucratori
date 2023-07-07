import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/hero-section.style";
import Woman from "../../public/images/hero-woman.png";
import SearchIcon from "../../public/images/search-icon.svg";
import LocationIcon from "../../public/images/location-icon.svg";

const HeroSection = () => {
  return (
    <>
      <s.HeroSection className="heroBanner">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="banner-text">
              <h1>Over 1000 Opportunities <br />in One Place</h1>
              <p>Choose from over 1000 employers and 5000 jobs. <br />Find your dream job and apply. We take care of the rest!</p>
            </Col>
          </Row>
          <s.SearchHorizontal className="searchHorizontal">
            <s.WhiteBox className="whiteBox">
              <div className="beforeIcon keywordField">
                <Image src={SearchIcon} alt="Search Icon" />
                <Form.Control type="text" placeholder="Keywords / Job Title" />
              </div>
              <span className="lineShape"></span>
              <div className="beforeIcon">
                <Image src={LocationIcon} alt="Location Icon" />
                <Form.Control type="text" placeholder="Location" />
              </div>
              <Button type="submit" className="redBtn">Search</Button>
            </s.WhiteBox>
            <p>Popular Search: Designer, Developer,Web, iOS, PHP, Senior, Engineer</p>
          </s.SearchHorizontal>
          <s.LadyPart className="lady-img-part">
            <Image placeholder='blur' src={Woman} alt="Woman" />
          </s.LadyPart>
        </Container>
      </s.HeroSection>
    </>
  );
};

export default HeroSection;
