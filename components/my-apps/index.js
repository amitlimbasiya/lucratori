import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/myapp-listing.style";
import BookMarkIcon from "../../public/images/bookmark-icon.svg";
import OpenEyeIcon from "../../public/images/open-eye-icon.svg";
import NoDataFound from "../../public/images/not-found.svg";

const MyAppsFun = () => {

    return (
        <>
            <s.MyAppListParent className="myAppListParent">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="myappsListingPart">
                                <div className="appDataContent">
                                    <div className="companyDataInfo">
                                        <div className="jobCompanyLogo">
                                            <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" /></Link>
                                        </div>
                                        <Link href="" className="jobHeading">Mobile UI Designer</Link>
                                        <div className="companyName">Apple</div>
                                    </div>
                                    <div className="publishadeDate">May 15, 2023</div>
                                    <div className="actionBtns">
                                        <Link href=""><span><Image src={OpenEyeIcon} alt="Open Eye Icon" /></span>Sent</Link>
                                    </div>
                                    <div className="rightAction">
                                        <Link href="#" className="redBtn">View Details</Link>
                                    </div>
                                </div>
                                <div className="appDataContent">
                                    <div className="companyDataInfo">
                                        <div className="jobCompanyLogo">
                                            <Link href=""><Image src={BookMarkIcon} alt="Open Eye Icon" /></Link>
                                        </div>
                                        <Link href="" className="jobHeading">Mobile UI Designer</Link>
                                        <div className="companyName">Apple</div>
                                    </div>
                                    <div className="publishadeDate">May 15, 2023</div>
                                    <div className="actionBtns">
                                        <Link href=""><span><Image src={OpenEyeIcon} alt="Open Eye Icon" /></span>Viewed</Link>
                                    </div>
                                    <div className="rightAction">
                                        <Link href="#" className="redBtn">View Details</Link>
                                    </div>
                                </div>
                                <div className="appDataContent">
                                    <div className="companyDataInfo">
                                        <div className="jobCompanyLogo">
                                            <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" /></Link>
                                        </div>
                                        <Link href="" className="jobHeading">Mobile UI Designer</Link>
                                        <div className="companyName">Apple</div>
                                    </div>
                                    <div className="publishadeDate">May 15, 2023</div>
                                    <div className="actionBtns">
                                        <Link href=""><span><Image src={OpenEyeIcon} alt="Share Icon" /></span>Share</Link>
                                    </div>
                                    <div className="rightAction">
                                        <Link href="#" className="redBtn">View Details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="noDataFound d-none">
                                <Row>
                                    <Col lg={7} className="mx-auto">
                                        <Image src={NoDataFound} alt="No Data Found" />
                                        <h2>No applications found</h2>
                                        <p>Are you looking for a job? We have a plenty of options for you. Do not wait for job. Quickly apply for the job and get hired,</p>
                                        <Link href="#" className="redBtn">Apply Now</Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </s.MyAppListParent>
        </>
    );
};

export default MyAppsFun;
