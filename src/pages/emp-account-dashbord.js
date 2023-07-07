import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import EmployerJobsInnerHeader from "../../components/employer-inner-header";
import AccDashbordFun from "../../components/account-dashbord-data";


export default function Jobs() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.EmpAccountDashbord.title}</title>
        <meta name="description" content={data.EmpAccountDashbord.description} />
        <meta name="keywords" content={data.EmpAccountDashbord.keyword} />
      </Head>
      <EmployerJobsInnerHeader />
      <AccDashbordFun />
    </>
  );
}
