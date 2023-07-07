import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/emoloyes-job-data";
import Accordion from 'react-bootstrap/Accordion';
import Pagination from 'react-bootstrap/Pagination';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutline';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const JobListData = () => {
  return (
    <>
      <s.empJobData>
        <Accordion>
          <Accordion.Item eventKey="0">
            <div className="jobData">
              <div className="jobPosition">
                <span className="statusBtn">Active</span>
                <div className="jobHeading">
                  <Link href="">Game Presenter</Link>
                  Standard ad (30 days)
                </div>
                <div className="myjobApplicants">
                  <span className="views">
                    <RemoveRedEyeOutlinedIcon />
                    4 Views
                  </span>
                  <div className="applicantsData">
                    <Link href="">
                      <PersonOutlineOutlinedIcon />
                      0 new
                    </Link>
                    <Link href="">
                      7 listed
                    </Link>
                    <Link href="">
                      7 total
                    </Link>
                  </div>
                </div>
              </div>
              <Accordion.Header></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <strong>07</strong>
                    Total CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    CVs In The List
                  </li>
                  <li>
                    <strong>07</strong>
                    New CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    Good
                  </li>
                  <li>
                    <strong>07</strong>
                    Average
                  </li>
                  <li>
                    <strong>07</strong>
                    Rejected
                  </li>
                  <li>
                    <strong>07</strong>
                    Viewed
                  </li>
                </ul>
              </Accordion.Body>
              <div className="myjobFooter">
                <div className="btnGroup">
                  <Link href=""><AutorenewOutlinedIcon /> Republish ad</Link>
                  <Link href=""><ShareOutlinedIcon /> Share</Link>
                  <Link href=""><CreateOutlinedIcon /> Edit</Link>
                  <Link href=""><RemoveRedEyeOutlinedIcon /> View</Link>
                  <Link href=""><NotInterestedOutlinedIcon /> Deactivate</Link>
                  <Link href=""><CloseOutlinedIcon /> Delete</Link>
                </div>
                <div className="jobDates">
                  <div><strong>Published:</strong> 2 days ago</div>
                  <div><strong>Expires:</strong> 28 June 2023</div>
                </div>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <div className="jobData">
              <div className="jobPosition">
                <span className="statusBtn">Active</span>
                <div className="jobHeading">
                  <Link href="">Computer Engineer</Link>
                  Standard ad (30 days)
                </div>
                <div className="myjobApplicants">
                  <span className="views">
                    <RemoveRedEyeOutlinedIcon />
                    4 Views
                  </span>
                  <div className="applicantsData">
                    <Link href="">
                      <PersonOutlineOutlinedIcon />
                      0 new
                    </Link>
                    <Link href="">
                      7 listed
                    </Link>
                    <Link href="">
                      7 total
                    </Link>
                  </div>
                </div>
              </div>
              <Accordion.Header></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <strong>07</strong>
                    Total CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    CVs In The List
                  </li>
                  <li>
                    <strong>07</strong>
                    New CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    Good
                  </li>
                  <li>
                    <strong>07</strong>
                    Average
                  </li>
                  <li>
                    <strong>07</strong>
                    Rejected
                  </li>
                  <li>
                    <strong>07</strong>
                    Viewed
                  </li>
                </ul>
              </Accordion.Body>
              <div className="myjobFooter">
                <div className="btnGroup">
                  <Link href=""><AutorenewOutlinedIcon /> Republish ad</Link>
                  <Link href=""><ShareOutlinedIcon /> Share</Link>
                  <Link href=""><CreateOutlinedIcon /> Edit</Link>
                  <Link href=""><RemoveRedEyeOutlinedIcon /> View</Link>
                  <Link href=""><NotInterestedOutlinedIcon /> Deactivate</Link>
                  <Link href=""><CloseOutlinedIcon /> Delete</Link>
                </div>
                <div className="jobDates">
                  <div><strong>Published:</strong> 2 days ago</div>
                  <div><strong>Expires:</strong> 28 June 2023</div>
                </div>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <div className="jobData">
              <div className="jobPosition">
                <span className="statusBtn">Active</span>
                <div className="jobHeading">
                  <Link href="">Mobtile UI Designer</Link>
                  Standard ad (30 days)
                </div>
                <div className="myjobApplicants">
                  <span className="views">
                    <RemoveRedEyeOutlinedIcon />
                    4 Views
                  </span>
                  <div className="applicantsData">
                    <Link href="">
                      <PersonOutlineOutlinedIcon />
                      0 new
                    </Link>
                    <Link href="">
                      7 listed
                    </Link>
                    <Link href="">
                      7 total
                    </Link>
                  </div>
                </div>
              </div>
              <Accordion.Header></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <strong>07</strong>
                    Total CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    CVs In The List
                  </li>
                  <li>
                    <strong>07</strong>
                    New CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    Good
                  </li>
                  <li>
                    <strong>07</strong>
                    Average
                  </li>
                  <li>
                    <strong>07</strong>
                    Rejected
                  </li>
                  <li>
                    <strong>07</strong>
                    Viewed
                  </li>
                </ul>
              </Accordion.Body>
              <div className="myjobFooter">
                <div className="btnGroup">
                  <Link href=""><AutorenewOutlinedIcon /> Republish ad</Link>
                  <Link href=""><ShareOutlinedIcon /> Share</Link>
                  <Link href=""><CreateOutlinedIcon /> Edit</Link>
                  <Link href=""><RemoveRedEyeOutlinedIcon /> View</Link>
                  <Link href=""><NotInterestedOutlinedIcon /> Deactivate</Link>
                  <Link href=""><CloseOutlinedIcon /> Delete</Link>
                </div>
                <div className="jobDates">
                  <div><strong>Published:</strong> 2 days ago</div>
                  <div><strong>Expires:</strong> 28 June 2023</div>
                </div>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <div className="jobData">
              <div className="jobPosition">
                <span className="statusBtn">Active</span>
                <div className="jobHeading">
                  <Link href="">Mobile UI Designer</Link>
                  Standard ad (30 days)
                </div>
                <div className="myjobApplicants">
                  <span className="views">
                    <RemoveRedEyeOutlinedIcon />
                    4 Views
                  </span>
                  <div className="applicantsData">
                    <Link href="">
                      <PersonOutlineOutlinedIcon />
                      0 new
                    </Link>
                    <Link href="">
                      7 listed
                    </Link>
                    <Link href="">
                      7 total
                    </Link>
                  </div>
                </div>
              </div>
              <Accordion.Header></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <strong>07</strong>
                    Total CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    CVs In The List
                  </li>
                  <li>
                    <strong>07</strong>
                    New CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    Good
                  </li>
                  <li>
                    <strong>07</strong>
                    Average
                  </li>
                  <li>
                    <strong>07</strong>
                    Rejected
                  </li>
                  <li>
                    <strong>07</strong>
                    Viewed
                  </li>
                </ul>
              </Accordion.Body>
              <div className="myjobFooter">
                <div className="btnGroup">
                  <Link href=""><AutorenewOutlinedIcon /> Republish ad</Link>
                  <Link href=""><ShareOutlinedIcon /> Share</Link>
                  <Link href=""><CreateOutlinedIcon /> Edit</Link>
                  <Link href=""><RemoveRedEyeOutlinedIcon /> View</Link>
                  <Link href=""><NotInterestedOutlinedIcon /> Deactivate</Link>
                  <Link href=""><CloseOutlinedIcon /> Delete</Link>
                </div>
                <div className="jobDates">
                  <div><strong>Published:</strong> 2 days ago</div>
                  <div><strong>Expires:</strong> 28 June 2023</div>
                </div>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <div className="jobData">
              <div className="jobPosition">
                <span className="statusBtn">Active</span>
                <div className="jobHeading">
                  <Link href="">Accountant</Link>
                  Standard ad (30 days)
                </div>
                <div className="myjobApplicants">
                  <span className="views">
                    <RemoveRedEyeOutlinedIcon />
                    4 Views
                  </span>
                  <div className="applicantsData">
                    <Link href="">
                      <PersonOutlineOutlinedIcon />
                      0 new
                    </Link>
                    <Link href="">
                      7 listed
                    </Link>
                    <Link href="">
                      7 total
                    </Link>
                  </div>
                </div>
              </div>
              <Accordion.Header></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <strong>07</strong>
                    Total CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    CVs In The List
                  </li>
                  <li>
                    <strong>07</strong>
                    New CVs
                  </li>
                  <li>
                    <strong>07</strong>
                    Good
                  </li>
                  <li>
                    <strong>07</strong>
                    Average
                  </li>
                  <li>
                    <strong>07</strong>
                    Rejected
                  </li>
                  <li>
                    <strong>07</strong>
                    Viewed
                  </li>
                </ul>
              </Accordion.Body>
              <div className="myjobFooter">
                <div className="btnGroup">
                  <Link href=""><AutorenewOutlinedIcon /> Republish ad</Link>
                  <Link href=""><ShareOutlinedIcon /> Share</Link>
                  <Link href=""><CreateOutlinedIcon /> Edit</Link>
                  <Link href=""><RemoveRedEyeOutlinedIcon /> View</Link>
                  <Link href=""><NotInterestedOutlinedIcon /> Deactivate</Link>
                  <Link href=""><CloseOutlinedIcon /> Delete</Link>
                </div>
                <div className="jobDates">
                  <div><strong>Published:</strong> 2 days ago</div>
                  <div><strong>Expires:</strong> 28 June 2023</div>
                </div>
              </div>
            </div>
          </Accordion.Item>
        </Accordion>
        <div className="d-flex align-items-center justify-content-center">
          <Pagination className="mb-0">
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Next className="nextAll" />
          </Pagination>
        </div>
      </s.empJobData>
    </>
  );
};

export default JobListData;
