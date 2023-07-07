import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/emp-account-dashbord";
import Tabs from '../../node_modules/react-responsive-tabs-tmp';
import userImg from "../../public/images/user.png";
import MobileIcon from "../../public/images/mobile-icon.svg";
import EnvelopeIcon from "../../public/images/envelope-icon.svg";
import UserIcon from "../../public/images/user-icon.svg";

const starndardAdsData = () => {
    return (
        <>
            <div className="dataOptionPart">
                <p><Link href="">Standard Ad (30 days) </Link><span>777 ads</span></p>
            </div>
        </>
    );
};

const availableAdsCVs = [
    { name: ['Standard Ads'], biography: starndardAdsData() },
    { name: ['Business Ads'], biography: "test 2" },
    { name: ['Premium Ads'], biography: "test 3" },
    { name: ['CVs'], biography: "test 4" },
];

function availableAdsCVsGetTabs() {

    return availableAdsCVs.map(president => ({
        tabClassName: 'tab',
        panelClassName: 'panel',
        title: president.name,
        getContent: () => president.biography,
    }));

}


const yourJobsDataAds = () => {
    return (
        <>
            <div className="dataOptionPart">
                <ul>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                </ul>
                <div className="text-md-end mt-3 mt-md-0">
                    <Link href="" className="redBtn">See all jobs</Link>
                </div>
            </div>
        </>
    );
};
const yourJobs = [
    { name: ['Your Ads'], biography: yourJobsDataAds() },
    { name: ['Expires  Soon'], biography: "test 2" },
    { name: ['Saved'], biography: "test 3" },
];
function yourJobsGetTabs() {
    return yourJobs.map(president => ({
        tabClassName: 'tab',
        panelClassName: 'panel',
        title: president.name,
        getContent: () => president.biography,
    }));
}

const latestApplications = () => {
    return (
        <>
            <div className="dataOptionPart">
                <ul>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                    <li><Link href="">Back Office Sales Representative</Link>
                        <span>47 applicants</span>
                    </li>
                </ul>
                <div className="text-md-end mt-3 mt-md-0">
                    <Link href="" className="redBtn">See all jobs</Link>
                </div>
            </div>
        </>
    );
};
const applicants = [
    { name: ['Latest Applications'], biography: latestApplications() },
];
function applicantsGetTabs() {
    return applicants.map(president => ({
        tabClassName: 'tab',
        panelClassName: 'panel',
        title: president.name,
        getContent: () => president.biography,
    }));
}

const douments = [
    { name: ['Unpaid Invoices / Proformas'], biography: "You have no outstanding invoice or proforma! Thank you!" },
    { name: ['Your Contracts'], biography: "test1" },
];
function doumentsGetTabs() {
    return douments.map(president => ({
        tabClassName: 'tab',
        panelClassName: 'panel',
        title: president.name,
        getContent: () => president.biography,
    }));
}
const AccDashbordFun = () => {

    return (
        <>
            <s.EmpAccountDash className="empAccountDash">
                <Container>
                    <Row>
                        <Col lg={3} md={4}>
                            <div className="dataWhiteBox">
                                <div className="userAccount">
                                    <div className="userImg">
                                        <Image src={userImg} alt="Logo" />
                                    </div>
                                    <div className="userDataInfo">
                                        <span className="userName">Google</span>
                                        <span className="userPosition">Google - The People Republi enthusiastic and different! always helpful at the right time!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="dataWhiteBox">
                                <h3 className="dwbHeading">Contact Person</h3>
                                <div className="innerInfo">
                                    <ul>
                                        <li>
                                            <div className="imgBox">
                                                <Image src={UserIcon} alt="User Icon" />
                                            </div>
                                            <div className="infoBox">
                                                <strong>John Doe</strong>Account Manager
                                            </div>
                                        </li>
                                        <li>
                                            <div className="imgBox">
                                                <Image src={EnvelopeIcon} alt="Envelope Icon" />
                                            </div>
                                            <div className="infoBox">
                                                <strong>Email</strong><Link href="">abc.123@gmail.com</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="imgBox">
                                                <Image src={MobileIcon} alt="Mobile Icon" />
                                            </div>
                                            <div className="infoBox">
                                                <strong>Phone No</strong><Link href="">+123 456 7890</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9} md={8}>
                            <div className="cardPart">
                                <div className="cardHeading">
                                    <div className="cardLeft">
                                        Available Ads & CVs
                                    </div>
                                    <div className="cardRight">
                                        <ul>
                                            <li><span>Total ads:</span> 1234</li>
                                            <li><span>Total CVs:</span> 1234</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cardBody">
                                    <Tabs items={availableAdsCVsGetTabs()} />
                                </div>
                            </div>
                            <div className="cardPart">
                                <div className="cardHeading">
                                    <div className="cardLeft">
                                        Your Jobs
                                    </div>
                                    <div className="cardRight">
                                        <ul>
                                            <li><span>Active jobs:</span> 1234</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cardBody">
                                    <Tabs items={yourJobsGetTabs()} />
                                </div>
                            </div>
                            <div className="cardPart">
                                <div className="cardHeading">
                                    <div className="cardLeft">
                                        Applicants
                                    </div>
                                    <div className="cardRight">
                                        <ul>
                                            <li><span>New applicants last week:</span> 1234</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cardBody">
                                    <Tabs items={applicantsGetTabs()} />
                                </div>
                            </div>
                            <div className="cardPart">
                                <div className="cardHeading">
                                    <div className="cardLeft">
                                        Documents
                                    </div>

                                </div>
                                <div className="cardBody">
                                    <Tabs items={doumentsGetTabs()} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </s.EmpAccountDash>
        </>
    );
};

export default AccDashbordFun;
