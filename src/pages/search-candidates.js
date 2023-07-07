import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import SearchCandidateFun from "../../components/search-filter-component";
import EmployerJobsInnerHeader from "../../components/employer-inner-header";

export default function MyAppsData() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.SearchCandidates.title}</title>
        <meta name="description" content={data.SearchCandidates.description} />
        <meta name="keywords" content={data.SearchCandidates.keyword} />
      </Head>
      <EmployerJobsInnerHeader />
      <SearchCandidateFun />
    </>
  );
}
