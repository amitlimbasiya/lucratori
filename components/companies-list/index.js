import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/companies-list.style";
import Companie1 from "../../public/images/companie-1.jpg";
import Companie2 from "../../public/images/companie-2.jpg";
import Companie3 from "../../public/images/companie-3.jpg";
import Companie4 from "../../public/images/companie-4.jpg";
import Companie5 from "../../public/images/companie-5.jpg";
import Companie6 from "../../public/images/companie-6.jpg";
import Companie7 from "../../public/images/companie-7.jpg";
import Companie8 from "../../public/images/companie-8.jpg";

const CompaniesListing = () => {

  return (
    <>
      <s.companiesListing className="companiesListing">
        <Container>
          <Row>
            <Col className="topText text-center">
              <h2>Companies that offer <br />the best opportunities</h2>
              <p>more than <span>500</span> companies looking to hire</p>
            </Col>
          </Row>
        </Container>
        <Container className="bottomShape">
          <Row>
            <Col xl={3} lg={4} sm={6}>

              <div className="jobItem">
                <div className="imageBox">
                  <Image src={Companie1} alt="Companie" />
                </div>
                <div className="jobSortInfo">
                  <h3><Link href="#">Samsung</Link></h3>
                  <span className="location">New York</span>
                  <span className="openJobs">Open Jobs (20)</span>
                </div>
              </div>

            </Col>
            <Col xl={3} lg={4} sm={6}>

              <div className="jobItem">
                <div className="imageBox">
                  <Image src={Companie2} alt="Companie 2" />
                </div>
                <div className="jobSortInfo">
                  <h3><Link href="#">IKEA</Link></h3>
                  <span className="location">CHICAGO</span>
                  <span className="openJobs">Open Jobs (55)</span>
                </div>
              </div>

            </Col>
            <Col xl={3} lg={4} sm={6}>

              <div className="jobItem">
                <div className="imageBox">
                  <Image src={Companie3} alt="Companie 3" />
                </div>
                <div className="jobSortInfo">
                  <h3><Link href="#">Dedman</Link></h3>
                  <span className="location">Germany</span>
                  <span className="openJobs">Open Jobs (100)</span>
                </div>
              </div>

            </Col>
            <Col xl={3} lg={4} sm={6}>

              <div className="jobItem">
                <div className="imageBox">
                  <Image src={Companie4} alt="Companie 4" />
                </div>
                <div className="jobSortInfo">
                  <h3><Link href="#">HORNBACH</Link></h3>
                  <span className="location">New York</span>
                  <span className="openJobs">Open Jobs (28)</span>
                </div>
              </div>

            </Col>
            <Col xl={3} lg={4} sm={6}>

              <div className="jobItem">
                <div className="imageBox">
                  <Image src={Companie5} alt="Companie 5" />
                </div>
                <div className="jobSortInfo">
                  <h3><Link href="#">APPLE</Link></h3>
                  <span className="location">California</span>
                  <span className="openJobs">Open Jobs (188)</span>
                </div>
              </div>

            </Col >
            <Col xl={3} lg={4} sm={6}>

              <div className="jobItem">
                <div className="imageBox">
                  <Image src={Companie6} alt="Companie 6" />
                </div>
                <div className="jobSortInfo">
                  <h3><Link href="#">ASTALDI</Link></h3>
                  <span className="location">MIAMI</span>
                  <span className="openJobs">Open Jobs (61)</span>
                </div>
              </div>

            </Col >
            <Col xl={3} lg={4} sm={6}>

              <div className="jobItem">
                <div className="imageBox">
                  <Image src={Companie7} alt="Companie 7" />
                </div>
                <div className="jobSortInfo">
                  <h3><Link href="#">DACIA</Link></h3>
                  <span className="location">London</span>
                  <span className="openJobs">Open Jobs (38)</span>
                </div>
              </div>

            </Col >
            <Col xl={3} lg={4} sm={6}>

              <div className="jobItem">
                <div className="imageBox">
                  <Image src={Companie8} alt="Companie 8" />
                </div>
                <div className="jobSortInfo">
                  <h3><Link href="#">REDBULL</Link></h3>
                  <span className="location">Paris</span>
                  <span className="openJobs">Open Jobs (22)</span>
                </div>
              </div>

            </Col >
            <Col sm={12} className="text-center">

              <Link href="#" className="redBtn">Browse more companies</Link>

            </Col >
          </Row >
        </Container >
      </s.companiesListing >
    </>
  );
};

export default CompaniesListing;
