import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import EyeIcon from "../../public/images/eyeIcon.svg";


const CompnayEditChangePass = () => {
    return (
        <>
            <Form>
                <div className="bordaredHeading">
                    <h3>Change Password</h3>
                    <p>* Fields marked with an asterisk (*) are mandatory</p>
                </div>
                <div className="feelableFormPart">
                    <Row>
                        <Col lg={5} className="ps-lg-5 ms-lg-5 my-lg-4 my-sm-3">
                            <Row>
                                <Col sm={12}>
                                    <Form.Group controlId="oldPassword" className="parentControl feelbleControl pwdField">
                                        <Form.Label>Old Password *</Form.Label>
                                        <Form.Control type="password" placeholder="12345678" className="feelble" />
                                        <Link href="" className="viewPassword"><Image src={EyeIcon} alt="EyeIcon" /></Link>
                                    </Form.Group>
                                    <Form.Group controlId="newPassword" className="parentControl  feelbleControl pwdField">
                                        <Form.Label>New Password *</Form.Label>
                                        <Form.Control type="password" placeholder="12345678" className="feelble" />
                                        <Link href="" className="viewPassword"><Image src={EyeIcon} alt="EyeIcon" /></Link>
                                    </Form.Group>
                                    <Form.Group controlId="confirmPassword" className="parentControl  feelbleControl pwdField">
                                        <Form.Label>Confirm New Password *</Form.Label>
                                        <Form.Control type="password" placeholder="12345678" className="feelble" />
                                        <Link href="" className="viewPassword"><Image src={EyeIcon} alt="EyeIcon" /></Link>
                                    </Form.Group>
                                </Col>
                                <Col sm={12}><Button className="redBtn">Change Password</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Form>
        </>
    );
};

export default CompnayEditChangePass;
