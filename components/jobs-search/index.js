import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import * as s from "../../src/styles/job-search.style.js";
import SearchIcon from "../../public/images/search-icon.svg";

const JobSearch = () => {
    return (
        <>
            <s.JobSection>
                <Container>
                    <s.SearchHorizontal className="searchHorizontal">
                        <s.WhiteBox className="whiteBox">
                            <div className="beforeIcon keywordField">
                                <Image src={SearchIcon} alt="Search Icon" />
                                <Form.Control type="text" placeholder="Keywords" />
                            </div>
                        </s.WhiteBox>
                        <Button type="submit" className="redBtn">Search</Button>
                    </s.SearchHorizontal>
                </Container>
            </s.JobSection>
        </>
    );
};

export default JobSearch;
