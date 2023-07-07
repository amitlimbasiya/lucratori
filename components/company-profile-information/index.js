import React, { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";

const CompnayAboutInfo = () => {

    return (
        <>
            <div className="compnayAboutInfo" id="companyAbout">
                <Container>
                    <Row>
                        <Col xl={9} className="text-center mx-auto">
                            <h2>About</h2>
                            <p>Google, in full Google LLC formerly Google Inc. (1998–2017), American search engine company, founded in 1998 by Sergey Brin and Larry Page, that is a subsidiary of the holding company Alphabet Inc. More than 70 percent of worldwide online search requests are handled by Google, placing it at the heart of most Internet users’ experience. It is one of the world’s most prominent brands. Its headquarters are in Mountain View, California.</p>
                            <p>Google began as an online search firm, but it now offers more than 50 Internet services and products, from e-mail and online document creation to software for mobile phones and tablet computers. In addition, its 2012 acquisition of Motorola Mobility put it in the position to sell hardware in the form of mobile phones. Google’s broad product portfolio and size make it one of the top four influential companies in the high-tech marketplace, along with Apple, IBM, and Microsoft. Despite this myriad of products, its original search tool remains the core of its success. In 2016 Alphabet earned nearly all of its revenue from Google advertising based on users’ search requests.</p>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    );
};

export default CompnayAboutInfo;
