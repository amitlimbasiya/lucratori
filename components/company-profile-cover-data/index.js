import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import coverphoto from "public/images/companie-6.jpg";


const ChangeCoverPhoto = () => {

    return (
        <>
            <div className="changeCoverPhotoSection" style={{ backgroundImage: `url(${coverphoto.src})` }}>
                <Container>
                    <Row>
                        <Col className="text-end">
                            <Link href="" className="redBtn">Change Cover Image</Link>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    );
};

export default ChangeCoverPhoto;
