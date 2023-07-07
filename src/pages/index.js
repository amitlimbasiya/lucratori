import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import HeroSection from "../../components/hero-section";
import CTA from "../../components/cta";
import Trusted from "../../components/trusted-partners";
import JobsListing from "../../components/jobs-list";
import CompaniesListing from "../../components/companies-list";
import { data } from "../../data/Seo";

export default function Home() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.home.title}</title>
        <meta name="description" content={data.home.description} />
        <meta name="keywords" content={data.home.keyword} />
      </Head>
      <HeroSection />
      <Trusted />
      <JobsListing />
      <CompaniesListing />
      <CTA />
    </>
  );
}
