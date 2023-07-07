import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import EmployerJobsInnerHeader from "../../components/employer-inner-header";
import JobsAnnouncementFun from "../../components/jobs-announcement";

export default function EmployerJobsAnnouncement() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.EmployerJobsAnnouncement.title}</title>
        <meta name="description" content={data.EmployerJobsAnnouncement.description} />
        <meta name="keywords" content={data.EmployerJobsAnnouncement.keyword} />
      </Head>
      <EmployerJobsInnerHeader />
      <JobsAnnouncementFun />
    </>
  );
}
