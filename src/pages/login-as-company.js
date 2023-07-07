import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import LoginAsCompanyComponent from "../../components/login-as-company-component";


export default function Login() {

    return (
        <>
            <Head>
                <title>{data.LoginCompany.title}</title>
                <meta name="description" content={data.LoginCompany.description} />
                <meta name="keywords" content={data.login.keyword} />
            </Head>
            <LoginAsCompanyComponent />
        </>
    );
}