import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import CompanyIcon from "../../public/images/apple-alt-icon.svg";
import * as s from "../../src/styles/jobs-details.style";
import LocationcityIcon from "../../public/images/map-icon.svg";
import IndustryIcon from "../../public/images/Industry-Icon.svg";
import ScheduleIcon from "../../public/images/Schedule-Icon.svg";
import StudyLevelIcon from "../../public/images/StudyLevel-Icon.svg";
import ExperienceIcon from "../../public/images/Experience-Icon.svg";
import LanguageIcon from "../../public/images/Language-Icon.svg";
import DrivingPermitIcon from "../../public/images/DrivingPermit-Icon.svg";
import SalaryIcon from "../../public/images/Salary-Icon.svg";
import BookmarkAltIcon from "../../public/images/bookmark-alt-icon.svg";
import HideAltIcon from "../../public/images/Hide-alt-Icon.svg";
import ShareAltIcon from "../../public/images/Share-alt-Icon.svg";
import BookMarkIcon from "../../public/images/bookmark-icon.svg";
import HideIcon from "../../public/images/hide-icon.svg";

const JobsDetails = () => {
    return (
        <>
            <s.JobsDetailsParent className="JobsDetailsParent">
                <Container>
                    <Row>
                        <Col lg={3} md={4}>
                            <div className="jobdetails-sidebar">
                                <div className="jobdetails-logobox">
                                    <Image src={CompanyIcon} alt="CompanyLogo" width="42" height="42" />
                                    <h3>Apple</h3>
                                    <p>2 active ads</p>
                                </div>
                                <div className="jobdetails-criteria">
                                    <h3>Job Criteria</h3>
                                    <div className="jd-criteria-box">
                                        <Image src={LocationcityIcon} alt="CompanyLogo" width="15" height="27" />
                                        <div className="jd-criteria-info">
                                            <p>City</p>
                                            <span>Bucharest</span>
                                        </div>
                                    </div>
                                    <div className="jd-criteria-box">
                                        <Image src={ScheduleIcon} alt="ScheduleIcon" width="20" height="20" />
                                        <div className="jd-criteria-info">
                                            <p>Schedule</p>
                                            <span>Fulltime</span>
                                        </div>
                                    </div>
                                    <div className="jd-criteria-box">
                                        <Image src={StudyLevelIcon} alt="StudyLevelIcon" width="20" height="20" />
                                        <div className="jd-criteria-info">
                                            <p>Study Level</p>
                                            <span>Graduate</span>
                                        </div>
                                    </div>
                                    <div className="jd-criteria-box">
                                        <Image src={ExperienceIcon} alt="ExperienceLogo" width="20" height="35" />
                                        <div className="jd-criteria-info">
                                            <p>Experience</p>
                                            <span>2+ Years</span>
                                        </div>
                                    </div>
                                    <div className="jd-criteria-box">
                                        <Image src={LanguageIcon} alt="LanguageLogo" width="20" height="20" />
                                        <div className="jd-criteria-info">
                                            <p>Language</p>
                                            <span>English</span>
                                        </div>
                                    </div>
                                    <div className="jd-criteria-box">
                                        <Image src={DrivingPermitIcon} alt="DrivingPermitLogo" width="20" height="20" />
                                        <div className="jd-criteria-info">
                                            <p>Driving Permit</p>
                                            <span>Unspecified</span>
                                        </div>
                                    </div>
                                    <div className="jd-criteria-box">
                                        <Image src={SalaryIcon} alt="SalaryLogo" width="30" height="18" />
                                        <div className="jd-criteria-info">
                                            <p>Salary</p>
                                            <span>300-500 EUR</span>
                                        </div>
                                    </div>
                                    <div className="jd-criteria-box">
                                        <Image src={IndustryIcon} alt="IndustryIcon" width="20" height="35" />
                                        <div className="jd-criteria-info">
                                            <p>Industry</p>
                                            <span>Commerce</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="jobdetails-criteria">
                                    <h3>Job Actions</h3>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <Image src={BookmarkAltIcon} alt="BookmarkAltIcon" />
                                                <div className="jd-criteria-info"><p>Save</p></div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <Image src={HideAltIcon} alt="HideAltIcon" />
                                                <div className="jd-criteria-info"><p>Hide</p></div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <Image src={ShareAltIcon} alt="ShareAltIcon" />
                                                <div className="jd-criteria-info"><p>Share</p></div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9} md={8}>
                            <div className="jobdetails-contentbar">
                                <div className="jobdetails-title-block">
                                    <div className="jobdetails-title-left">
                                        <h1>Mobile UI Designer</h1>
                                        <p>Commercial Diplomatic Club S.R.L.</p>
                                        <span>1 Position</span>
                                    </div>
                                    <div className="jobdetails-title-right">
                                        <Link href="#" className="redBtn">Apply Now</Link>
                                    </div>
                                </div>
                                <div className="jobdetails-content-area">
                                    <div className="jobdetails-inner-box">
                                        <h3>Job Criteria</h3>
                                        <p>Ensures contact with external suppliers in relation to the supply of products: current correspondence, price negotiations and/or contracts under the direct supervision of the General Director.</p>
                                        <div className="listing-block">
                                            <p>Objectives of the position:</p>
                                            <ul>
                                                <li>Performs periodic analyzes related to the products in stock, makes purchase proposals, sends orders to external suppliers, negotiates prices with them based on their history.</li>
                                                <li>Check the correctness of the import documents</li>
                                                <li>Ensures contact with customs declarants and transport companies</li>
                                                <li>Performs translations for import goods</li>
                                                <li>Ensures the connection between external suppliers and the other departments of the company: accounting, logistics, distribution, marketing</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="jobdetails-inner-box">
                                        <h3>Benefits</h3>
                                        <div className="listing-block">
                                            <ul>
                                                <li>Motivating salary</li>
                                                <li>Vouchers</li>
                                                <li>Possibility of development in a team of professionals</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="jobdetails-inner-box">
                                        <h3>Company Description</h3>
                                        <p>Legend Com is one of the most important import and distribution companies in the field of stationery products. Importer of Uniball, Amos, Eagle, Helix, Kangaroo, Linc, ProOffice, Grand, Elba, Agipa, Mano products.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="jobsListingPart">
                                <h2>Similar Jobs</h2>
                                <ul>
                                    <li>
                                        <div className="jobCardContent">
                                            <div className="jobCompanyLogo">
                                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" width="15" height="27" /></Link>
                                            </div>
                                            <div className="jobTopPart">
                                                <Link href="" className="jobHeading">Mobile UI Designer</Link>
                                                <span className="publishadeDate">May 15, 2023</span>
                                            </div>
                                            <div className="companyName">Apple</div>
                                            <div className="sortInfo">
                                                <p>We are looking for talanted mobile UI designer to help us create beautiful and functional
                                                    interfaces for our company. Your role requires you to understand users very well.</p>
                                                <div className="cName">Commercial Diplomatic Club S.R.L.</div>
                                                <div className="scopeOfSalary">1000 - 1500 EUR net / month</div>
                                                <div className="addressPart">Bucharest, Ilfov</div>
                                            </div>

                                        </div>
                                        <div className="jobCardActions">
                                            <div className="leftAction">
                                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" width="15" height="27" />Save</Link>
                                                <Link href=""><Image src={HideIcon} alt="Hide Icon" width="15" height="27" />Hide</Link>
                                            </div>
                                            <div className="rightAction">
                                                <Link href="#" className="redBtn">Apply Quickly</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="jobCardContent">
                                            <div className="jobCompanyLogo">
                                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" width="15" height="27" /></Link>
                                            </div>
                                            <div className="jobTopPart">
                                                <Link href="" className="jobHeading">Mobile UI Designer</Link>
                                                <span className="publishadeDate">May 15, 2023</span>
                                            </div>
                                            <div className="companyName">Apple</div>
                                            <div className="sortInfo">
                                                <div className="cName">Commercial Diplomatic Club S.R.L.</div>
                                                <div className="scopeOfSalary">1000 - 1500 EUR net / month</div>
                                                <div className="addressPart">Bucharest, Ilfov</div>
                                            </div>

                                        </div>
                                        <div className="jobCardActions">
                                            <div className="leftAction">
                                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" width="15" height="27" />Save</Link>
                                                <Link href=""><Image src={HideIcon} alt="Hide Icon" width="15" height="27" />Hide</Link>
                                            </div>
                                            <div className="rightAction">
                                                <Link href="#" className="redBtn">Apply Quickly</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="jobCardContent">
                                            <div className="jobCompanyLogo">
                                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" width="15" height="27" /></Link>
                                            </div>
                                            <div className="jobTopPart">
                                                <Link href="" className="jobHeading">Mobile UI Designer</Link>
                                                <span className="publishadeDate">May 15, 2023</span>
                                            </div>
                                            <div className="companyName">Apple</div>
                                            <div className="sortInfo">
                                                <p>We are looking for talanted mobile UI designer to help us create beautiful and functional
                                                    interfaces for our company. Your role requires you to understand users very well.</p>
                                                <div className="cName">Commercial Diplomatic Club S.R.L.</div>
                                                <div className="scopeOfSalary">1000 - 1500 EUR net / month</div>
                                                <div className="addressPart">Bucharest, Ilfov</div>
                                            </div>

                                        </div>
                                        <div className="jobCardActions">
                                            <div className="leftAction">
                                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" width="15" height="27" />Save</Link>
                                                <Link href=""><Image src={HideIcon} alt="Hide Icon" width="15" height="27" />Hide</Link>
                                            </div>
                                            <div className="rightAction">
                                                <Link href="#" className="redBtn">Apply Quickly</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="jobCardContent">
                                            <div className="jobCompanyLogo">
                                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" width="15" height="27" /></Link>
                                            </div>
                                            <div className="jobTopPart">
                                                <Link href="" className="jobHeading">Mobile UI Designer</Link>
                                                <span className="publishadeDate">May 15, 2023</span>
                                            </div>
                                            <div className="companyName">Apple</div>
                                            <div className="sortInfo">
                                                <p>We are looking for talanted mobile UI designer to help us create beautiful and functional
                                                    interfaces for our company. Your role requires you to understand users very well.</p>
                                                <div className="cName">Commercial Diplomatic Club S.R.L.</div>
                                                <div className="scopeOfSalary">1000 - 1500 EUR net / month</div>
                                                <div className="addressPart">Bucharest, Ilfov</div>
                                            </div>

                                        </div>
                                        <div className="jobCardActions">
                                            <div className="leftAction">
                                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" width="15" height="27" />Save</Link>
                                                <Link href=""><Image src={HideIcon} alt="Hide Icon" width="22" height="15" />Hide</Link>
                                            </div>
                                            <div className="rightAction">
                                                <Link href="#" className="redBtn">Apply Quickly</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </s.JobsDetailsParent>
        </>
    );
};

export default JobsDetails;
