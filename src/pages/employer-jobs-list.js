import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import EmployerJobsInnerHeader from "../../components/employer-inner-header";
import AllJobsSection from "../../components/employer-jobs-lists";


export default function EmployerJobsListing() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.EmployerJobsListing.title}</title>
        <meta name="description" content={data.EmployerJobsListing.description} />
        <meta name="keywords" content={data.EmployerJobsListing.keyword} />
      </Head>
      <EmployerJobsInnerHeader />
      <AllJobsSection />
    </>
  );
}
