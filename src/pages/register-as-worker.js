import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import RegisterAsWorkerComponent from "../../components/register-as-worker";

export default function RegisterAsWorker() {

    return (
        <>
            <Head>
                <title>{data.RegisterAsWorkerSeo.title}</title>
                <meta name="description" content={data.RegisterAsWorkerSeo.description} />
                <meta name="keywords" content={data.RegisterAsWorkerSeo.keyword} />
            </Head>
            <RegisterAsWorkerComponent />
        </>
    );
}