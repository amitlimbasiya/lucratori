import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import Login from "../../components/login";

export default function Logins() {

    return (
        <>
            <Head>
                <title>{data.login.title}</title>
                <meta name="description" content={data.login.description} />
                <meta name="keywords" content={data.login.keyword} />
            </Head>
            <Login />
        </>
    );
}