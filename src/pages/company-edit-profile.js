import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import EmployerJobsInnerHeader from "../../components/employer-inner-header";
import AllJobsSection from "../../components/employer-jobs-lists";
import CompnayProfileEdits from "../../components/compnay-edit-profile";


export default function EmployerJobsListing() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.compayEditProfile.title}</title>
        <meta name="description" content={data.compayEditProfile.description} />
        <meta name="keywords" content={data.compayEditProfile.keyword} />
      </Head>
      <EmployerJobsInnerHeader />
      <CompnayProfileEdits />
    </>
  );
}
