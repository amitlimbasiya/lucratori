import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import BookMarkIcon from "../../public/images/bookmark-icon.svg";
import HideIcon from "../../public/images/hide-icon.svg";
import ShareIcon from "../../public/images/share-icon.svg";
import Pagination from 'react-bootstrap/Pagination';

const JobsListCompFun = () => {

    return (
        <>

            <div className="jobsListingPart">
                <ul>
                    <li>
                        <div className="jobCardContent">
                            <div className="jobCompanyLogo">
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" /></Link>
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
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" />Save</Link>
                                <Link href=""><Image src={HideIcon} alt="Hide Icon" />Hide</Link>
                                <Link href=""><Image src={ShareIcon} alt="Share Icon" />Share</Link>
                            </div>
                            <div className="rightAction">
                                <Link href="#" className="redBtn">Apply Quickly</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="jobCardContent">
                            <div className="jobCompanyLogo">
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" /></Link>
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
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" />Save</Link>
                                <Link href=""><Image src={HideIcon} alt="Hide Icon" />Hide</Link>
                                <Link href=""><Image src={ShareIcon} alt="Share Icon" />Share</Link>
                            </div>
                            <div className="rightAction">
                                <Link href="#" className="redBtn">Apply Quickly</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="jobCardContent">
                            <div className="jobCompanyLogo">
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" /></Link>
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
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" />Save</Link>
                                <Link href=""><Image src={HideIcon} alt="Hide Icon" />Hide</Link>
                                <Link href=""><Image src={ShareIcon} alt="Share Icon" />Share</Link>
                            </div>
                            <div className="rightAction">
                                <Link href="#" className="redBtn">Apply Quickly</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="jobCardContent">
                            <div className="jobCompanyLogo">
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" /></Link>
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
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" />Save</Link>
                                <Link href=""><Image src={HideIcon} alt="Hide Icon" />Hide</Link>
                                <Link href=""><Image src={ShareIcon} alt="Share Icon" />Share</Link>
                            </div>
                            <div className="rightAction">
                                <Link href="#" className="redBtn">Apply Quickly</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="jobCardContent">
                            <div className="jobCompanyLogo">
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" /></Link>
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
                                <Link href=""><Image src={BookMarkIcon} alt="Bookmark Icon" />Save</Link>
                                <Link href=""><Image src={HideIcon} alt="Hide Icon" />Hide</Link>
                                <Link href=""><Image src={ShareIcon} alt="Share Icon" />Share</Link>
                            </div>
                            <div className="rightAction">
                                <Link href="#" className="redBtn">Apply Quickly</Link>
                            </div>
                        </div>
                    </li>
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
