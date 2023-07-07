import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import Link from "next/link";

const CompnayProfileContact = () => {

    return (
        <>
            <div className="companyContact" id="companyContact">
                <Container>
                    <Row>
                        <Col xl={9} className="mx-auto">
                            <div className="text-center">
                                <h2>Contact</h2>
                            </div>
                            <div className="companyContactInfo text-center">
                                <p><strong>Web</strong>
                                    <Link href="www.google.com" target="_blank">www.google.com</Link></p>
                                <p><strong>Address</strong>
                                    1600 Amphitheatre Parkway in Mountain View, California</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2849.313789187302!2d26.121720029031042!3d44.42672517205413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1686930082613!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div >
        </>
    );
};

export default CompnayProfileContact;
