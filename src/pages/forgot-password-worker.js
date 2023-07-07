import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import ForgotPasswordAsWorkerComponent from "../../components/forgot-password-worker";

export default function ForgotPassword() {

    return (
        <>
            <Head>
                <title>{data.ForgotPasswordWorkerSeo.title}</title>
                <meta name="description" content={data.ForgotPasswordWorkerSeo.description} />
                <meta name="keywords" content={data.ForgotPasswordWorkerSeo.keyword} />
            </Head>
            <ForgotPasswordAsWorkerComponent />
        </>
    );
}