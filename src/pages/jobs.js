import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import JobSearch from "../../components/jobs-search";
import JobsListFun from "../../components/jobs-listing";

export default function Jobs() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.jobsListing.title}</title>
        <meta name="description" content={data.jobsListing.description} />
        <meta name="keywords" content={data.jobsListing.keyword} />
      </Head>
      <JobSearch />
      <JobsListFun />
    </>
  );
}
