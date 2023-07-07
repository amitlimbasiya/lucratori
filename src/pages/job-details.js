import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import JobsDetails from "../../components/job-details";


export default function JobDetailsfan() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.JobsDetails.title}</title>
        <meta name="description" content={data.JobsDetails.description} />
        <meta name="keywords" content={data.JobsDetails.keyword} />
      </Head>
      <JobsDetails/>
    </>
  );
}