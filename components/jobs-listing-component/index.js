import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import BookMarkIcon from "../../public/images/bookmark-icon.svg";
import HideIcon from "../../public/images/hide-icon.svg";
import ShareIcon from "../../public/images/share-icon.svg";
import Pagination from 'react-bootstrap/Pagination';

function JobsListingPartFun({
    jobCompanyLogo,
    jobHeading,
    publishadeDate,
    companyName,
    cSortInfo,
    cName,
    scopeOfSalary,
    addressCity,
    addressCounty
}) {
    return (
        <>
            <li>
                <div className="jobCardContent">
                    <div className="jobCompanyLogo">
                        <Link href="">{jobCompanyLogo}</Link>
                    </div>
                    <div className="jobTopPart">
                        <Link href="" className="jobHeading">{jobHeading}</Link>
                        <span className="publishadeDate">{publishadeDate}</span>
                    </div>
                    <div className="companyName">{companyName}</div>
                    <div className="sortInfo">
                        <p>{cSortInfo}</p>
                        <div className="cName">{cName}</div>
                        <div className="scopeOfSalary">{scopeOfSalary}</div>
                        <div className="addressPart">{addressCity}, {addressCounty}</div>
                    </div>
                </div>
                <div className="jobCardActions">
                    <div className="leftAction">
                        <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" />Save</Link>
                        <Link href=""><Image src={HideIcon} alt="Hide Icon" />Hide</Link>
                        <Link href=""><Image src={ShareIcon} alt="Share Icon" />Share</Link>
                    </div>
                    <div className="rightAction">
                        <Link href="#" className="redBtn">Apply Quickly</Link>
                    </div>
                </div>
            </li>
        </>

    );
}

const JobsListCompFun = () => {

    return (
        <>

            <div className="jobsListingPart">
                <ul>
                    <JobsListingPartFun
                        jobCompanyLogo={<Image src={BookMarkIcon} alt="Bookmark Icon" />}
                        jobHeading="Mobile UI Designer"
                        publishadeDate="May 15, 2023"
                        companyName="Apple"
                        cSortInfo="We are looking for talanted mobile UI designer to help us create beautiful and functional
                            interfaces for our company. Your role requires you to understand users very well."
                        cName="Commercial Diplomatic Club S.R.L."
                        scopeOfSalary="1000 - 1500 EUR net / month"
                        addressCity="Bucharest"
                        addressCounty="Ilfov"
                    />
                    <JobsListingPartFun
                        jobCompanyLogo={<Image src={BookMarkIcon} alt="Bookmark Icon" />}
                        jobHeading="Server Developer"
                        publishadeDate="May 5, 2023"
                        companyName="Microsoft"
                        cName="Commercial Diplomatic Club S.R.L."
                        scopeOfSalary="1500 - 2500 EUR net / month"
                        addressCity="Bucharest"
                        addressCounty="Ilfov"
                    />
                    <JobsListingPartFun
                        jobCompanyLogo={<Image src={BookMarkIcon} alt="Bookmark Icon" />}
                        jobHeading="Mobile UI Designer"
                        publishadeDate="May 15, 2023"
                        companyName="Apple"
                        cSortInfo="We are looking for talanted mobile UI designer to help us create beautiful and functional
                            interfaces for our company. Your role requires you to understand users very well."
                        cName="Commercial Diplomatic Club S.R.L."
                        scopeOfSalary="1000 - 1500 EUR net / month"
                        addressCity="Bucharest"
                        addressCounty="Ilfov"
                    />
                    <JobsListingPartFun
                        jobCompanyLogo={<Image src={BookMarkIcon} alt="Bookmark Icon" />}
                        jobHeading="Mobile UI Designer"
                        publishadeDate="May 15, 2023"
                        companyName="Apple"
                        cSortInfo="We are looking for talanted mobile UI designer to help us create beautiful and functional
                            interfaces for our company. Your role requires you to understand users very well."
                        cName="Commercial Diplomatic Club S.R.L."
                        scopeOfSalary="1000 - 1500 EUR net / month"
                        addressCity="Bucharest"
                        addressCounty="Ilfov"
                    />
                    <JobsListingPartFun
                        jobCompanyLogo={<Image src={BookMarkIcon} alt="Bookmark Icon" />}
                        jobHeading="Server Developer"
                        publishadeDate="May 5, 2023"
                        companyName="Microsoft"
                        cName="Commercial Diplomatic Club S.R.L."
                        scopeOfSalary="1500 - 2500 EUR net / month"
                        addressCity="Bucharest"
                        addressCounty="Ilfov"
                    />
                    <JobsListingPartFun
                        jobCompanyLogo={<Image src={BookMarkIcon} alt="Bookmark Icon" />}
                        jobHeading="Mobile UI Designer"
                        publishadeDate="May 15, 2023"
                        companyName="Apple"
                        cSortInfo="We are looking for talanted mobile UI designer to help us create beautiful and functional
                            interfaces for our company. Your role requires you to understand users very well."
                        cName="Commercial Diplomatic Club S.R.L."
                        scopeOfSalary="1000 - 1500 EUR net / month"
                        addressCity="Bucharest"
                        addressCounty="Ilfov"
                    />
                </ul>
            </div>
            <div className="d-flex align-items-center justify-content-center pt-sm-5">
                <Pagination className="mb-0">
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next className="nextAll" />
                </Pagination>
            </div>

        </>
    );
};

export default JobsListCompFun;
