import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import JobsListCompFun from "../jobs-listing-component";

const CompnayJobsListing = () => {

    return (
        <>
            <div className="compnayJobsListing" id="companyJobs">
                <Container>
                    <Row>
                        <Col xl={9} className="mx-auto">
                            <div className="text-center">
                                <h2>Jobs</h2>
                            </div>
                            <JobsListCompFun />
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    );
};

export default CompnayJobsListing;
