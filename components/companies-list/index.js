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

function JobListingFun({
  companiesHeading,
  companiesLocation,
  companiesImage,
  companiesOpenJobs
}) {
  return (
    <>
      <Col xl={3} lg={4} sm={6}>
        <div className="jobItem">
          <div className="imageBox">
            {companiesImage}
          </div>
          <div className="jobSortInfo">
            <h3><Link href="#">{companiesHeading}</Link></h3>
            <span className="location">{companiesLocation}</span>
            <span className="openJobs">Open Jobs ({companiesOpenJobs})</span>
          </div>
        </div>

      </Col>
    </>

  );
}

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
            <JobListingFun
              companiesImage={<Image src={Companie1} alt="Companie" />}
              companiesHeading="Samsung"
              companiesLocation="New York"
              companiesOpenJobs="20"
            />
            <JobListingFun
              companiesImage={<Image src={Companie2} alt="Companie 2" />}
              companiesHeading="IKEA"
              companiesLocation="CHICAGO"
              companiesOpenJobs="55"
            />
            <JobListingFun
              companiesImage={<Image src={Companie3} alt="Companie 3" />}
              companiesHeading="Dedman"
              companiesLocation="Germany"
              companiesOpenJobs="105"
            />
            <JobListingFun
              companiesImage={<Image src={Companie4} alt="Companie 4" />}
              companiesHeading="HORNBACH"
              companiesLocation="New York"
              companiesOpenJobs="45"
            />
            <JobListingFun
              companiesImage={<Image src={Companie5} alt="Companie 5" />}
              companiesHeading="APPLE"
              companiesLocation="California"
              companiesOpenJobs="188"
            />
            <JobListingFun
              companiesImage={<Image src={Companie6} alt="Companie 6" />}
              companiesHeading="ASTALDI"
              companiesLocation="MIAMI"
              companiesOpenJobs="61"
            />
            <JobListingFun
              companiesImage={<Image src={Companie7} alt="Companie 7" />}
              companiesHeading="DACIA"
              companiesLocation="London"
              companiesOpenJobs="78"
            />
            <JobListingFun
              companiesImage={<Image src={Companie8} alt="Companie 8" />}
              companiesHeading="REDBULL"
              companiesLocation="Paris"
              companiesOpenJobs="15"
            />
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
