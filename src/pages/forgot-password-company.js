import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import ForgotPasswordAsCompanyComponent from "../../components/forgot-password-company";


export default function ForgotPassword() {

    return (
        <>
            <Head>
                <title>{data.ForgotPasswordCompanySeo.title}</title>
                <meta name="description" content={data.ForgotPasswordCompanySeo.description} />
                <meta name="keywords" content={data.ForgotPasswordCompanySeo.keyword} />
            </Head>
            <ForgotPasswordAsCompanyComponent />
        </>
    );
}