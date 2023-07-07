import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import ResetPasswordAsCompanyComponent from "../../components/reset-password-company";


export default function ResetPassword() {

    return (
        <>
            <Head>
                <title>{data.ResetPasswordCompanySeo.title}</title>
                <meta name="description" content={data.ResetPasswordCompanySeo.description} />
                <meta name="keywords" content={data.ResetPasswordCompanySeo.keyword} />
            </Head>
            <ResetPasswordAsCompanyComponent />
        </>
    );
}