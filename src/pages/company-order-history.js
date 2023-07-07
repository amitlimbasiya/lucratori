import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import EmployerJobsInnerHeader from "../../components/employer-inner-header";
import CompnayOrderHistoryFun from "../../components/compnay-order-history";

export default function CompnayOrderHistory() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.OrderHistory.title}</title>
        <meta name="description" content={data.OrderHistory.description} />
        <meta name="keywords" content={data.OrderHistory.keyword} />
      </Head>
      <EmployerJobsInnerHeader />
      <CompnayOrderHistoryFun />
    </>
  );
}
