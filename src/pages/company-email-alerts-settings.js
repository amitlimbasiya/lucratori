import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import EmployerJobsInnerHeader from "../../components/employer-inner-header";
import CompnayEmailAlertsSettingsFun from "../../components/company-alerts-settings";


export default function CompnayEmailAlertsSettings() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.CompnayEmailAlertsSettings.title}</title>
        <meta name="description" content={data.CompnayEmailAlertsSettings.description} />
        <meta name="keywords" content={data.CompnayEmailAlertsSettings.keyword} />
      </Head>
      <EmployerJobsInnerHeader />
      <CompnayEmailAlertsSettingsFun />
    </>
  );
}
