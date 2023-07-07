import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import * as s from "../../src/styles/compnay-email-alert-setting.style";

const CompnayEmailAlertsSettingsFun = () => {

    return (
        <>
            <s.CompnayEmaileAlertSetting className="compnayEmailAlert">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="cardPart">
                                <div className="cardHeading">
                                    <div className="cardLeft">
                                        Newsletter Settings
                                    </div>
                                </div>
                                <div className="cardBody">
                                    <div className="custom-checkbox-Row btm-brd">
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"new-candidates-email"}
                                            label={"I want to receive the list of new candidates by e-mail."}
                                        />
                                    </div>
                                    <div className="custom-radiobox-Row btm-brd inline-radio">
                                        <label className="form-label">I want to receive the alert in the language</label>
                                        {['radio'].map((type) => (
                                            <div key={`check-api-${type}`} className="customRadioParent simpleRadio">
                                                <Form.Check.Label>
                                                    <Form.Check className="customRadio" type={type} id={`check-api-${type}`}>
                                                        <Form.Check.Input type={type} name="group1" />
                                                        {<div className="eRadioCircle"></div>}
                                                        {<p>Romanian</p>}
                                                    </Form.Check>
                                                </Form.Check.Label>
                                                <Form.Check.Label><Form.Check className="customRadio" type={type} id={`check-api-${type}`}>
                                                    <Form.Check.Input type={type} name="group1" />
                                                    {<div className="eRadioCircle"></div>}
                                                    {<p>English</p>}
                                                </Form.Check>
                                                </Form.Check.Label>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="custom-checkbox-Row">
                                        <label className="form-label mb-3">Select the list of e-mail addresses that will receive the "candidate status" alert:</label>
                                        <div className="ps-sm-3 pb-3">
                                            {['checkbox'].map((type) => (
                                                <div key={`check-api-${type}`} className="customCheckBoxParent">
                                                    <Form.Check.Label>
                                                        <Form.Check className="customCheckBox" type={type} id={`check-api-${type}`}>
                                                            <Form.Check.Input type={type} name="group1" />
                                                            {<div className="multiline"><span>andreea.corbeanu@lugera.ro</span>
                                                                (subscriber to Infrastructure and Network Regulation Specialist , Service Technician )</div>}
                                                        </Form.Check>
                                                    </Form.Check.Label>
                                                    <Form.Check.Label><Form.Check className="customCheckBox" type={type} id={`check-api-${type}`}>
                                                        <Form.Check.Input type={type} name="group1" />
                                                        {<div className="multiline"><span>bianca.miroiu@lugera.ro</span>
                                                            (subscriber to Senior HR Admin & Payroll )</div>}
                                                    </Form.Check>
                                                    </Form.Check.Label>
                                                    <Form.Check.Label><Form.Check className="customCheckBox" type={type} id={`check-api-${type}`}>
                                                        <Form.Check.Input type={type} name="group1" />
                                                        {<div className="multiline"><span>diana.mitrache@lugera.ro</span>
                                                            (subscriber to Sales Engineer )</div>}
                                                    </Form.Check>
                                                    </Form.Check.Label>
                                                    <Form.Check.Label><Form.Check className="customCheckBox" type={type} id={`check-api-${type}`}>
                                                        <Form.Check.Input type={type} name="group1" />
                                                        {<div className="multiline"><span>florina.negru@lugera.ro</span>
                                                            (subscriber to Technician Test )</div>}
                                                    </Form.Check>
                                                    </Form.Check.Label>
                                                    <Form.Check.Label><Form.Check className="customCheckBox" type={type} id={`check-api-${type}`}>
                                                        <Form.Check.Input type={type} name="group1" />
                                                        {<div className="multiline"><span>georgiana.anghel@lugera.ro</span>
                                                            (subscriber to the Economist )</div>}
                                                    </Form.Check>
                                                    </Form.Check.Label>
                                                    <Form.Check.Label><Form.Check className="customCheckBox" type={type} id={`check-api-${type}`}>
                                                        <Form.Check.Input type={type} name="group1" />
                                                        {<div className="multiline"><span>ioana.savu@lugera.ro</span>
                                                            (subscriber to Technician Maintenance of automatic processes )</div>}
                                                    </Form.Check>
                                                    </Form.Check.Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardPart">
                                <div className="cardHeading">
                                    <div className="cardLeft">
                                        General information and special offers
                                    </div>
                                </div>
                                <div className="cardBody">
                                    <div className="custom-checkbox-Row">
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"hrTopics"}
                                            label={"Weekly email with the hottest HR topics"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="cardPart">
                                <div className="cardHeading">
                                    <div className="cardLeft">
                                        Alerts related to scheduled interviews
                                    </div>
                                </div>
                                <div className="cardBody">
                                    <div className="custom-checkbox-Row btm-brd">
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"receiveEmailCandidateConfirmedCancled"}
                                            label={"Receive an email when the candidate has confirmed or canceled the interview and when he gave reasons for not appearing at the interview"}
                                        />
                                    </div>
                                    <div className="custom-checkbox-Row btm-brd">
                                        <Form.Check
                                            type={"checkbox"}
                                            id={"receiveEmailCandidateInterviewsScheduledDay"}
                                            label={"Receive an email in the morning containing all the interviews scheduled for that day"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </s.CompnayEmaileAlertSetting>
        </>
    );
};

export default CompnayEmailAlertsSettingsFun;
