import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import Link from "next/link";

const CompnayProfileShare = () => {

    return (
        <>
            <div className="compnayShare" id="companySocial">
                <Container>
                    <Row>
                        <Col xl={9} className="mx-auto">
                            <div className="text-center">
                                <h2>Social</h2>
                                <div className="notConnectSocial">
                                    <h5>The Facebook page is not connected.</h5>
                                    <p>Candidates might see your company's Facebook page</p>
                                    <Link href="" className="outlineSocailBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.82 16.31"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M8.23,9.18l.46-3H5.83V4.31a1.49,1.49,0,0,1,1.68-1.6H8.82V.2A16.26,16.26,0,0,0,6.5,0,3.62,3.62,0,0,0,2.61,4V6.22H0v3H2.61v7.13H5.83V9.18Z" /></g></g></svg> Register with Facebook</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    );
};

export default CompnayProfileShare;
