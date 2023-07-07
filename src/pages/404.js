import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import Link from "next/link";

const Custom404 = () => {
    return (
        <>
            <div className="contant404">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col className="text-center">
                            <h1>404 - Page Not Found</h1>
                            <Link className="redBtn" href="">Go Back</Link>
                        </Col>
                    </Row>
                </Container >
            </div>
        </>
    );
};
export default Custom404