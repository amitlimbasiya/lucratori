import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import ResetPasswordAsWorkerComponent from "../../components/reset-password-worker";

export default function ResetPassword() {

    return (
        <>
            <Head>
                <title>{data.ResetPasswordWorkerSeo.title}</title>
                <meta name="description" content={data.ResetPasswordWorkerSeo.description} />
                <meta name="keywords" content={data.ResetPasswordWorkerSeo.keyword} />
            </Head>
            <ResetPasswordAsWorkerComponent />
        </>
    );
}