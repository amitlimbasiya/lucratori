import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import LoginAsWorkerComponent from "../../components/login-as-worker-component";

export default function Login() {

    return (
        <>
            <Head>
                <title>{data.LoginWorker.title}</title>
                <meta name="description" content={data.LoginWorker.description} />
                <meta name="keywords" content={data.LoginWorker.keyword} />
            </Head>
            <LoginAsWorkerComponent />
        </>
    );
}