import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import RegisterAsCompnayComponent from "../../components/register-as-company";


export default function RegisterAsComapny() {

    return (
        <>
            <Head>
                <title>{data.RegisterAsCompany.title}</title>
                <meta name="description" content={data.RegisterAsCompany.description} />
                <meta name="keywords" content={data.RegisterAsCompany.keyword} />
            </Head>
            <RegisterAsCompnayComponent />
        </>
    );
}