import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col, Container, } from "react-bootstrap";
import { data } from "../../data/Seo";
import Register from "../../components/register";


export default function RegisterL() {

    return (
        <>
            <Head>
                <title>{data.Register.title}</title>
                <meta name="description" content={data.Register.description} />
                <meta name="keywords" content={data.Register.keyword} />
            </Head>
            <Register />
        </>
    );
}