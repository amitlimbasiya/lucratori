import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import MyAppsFun from "../../components/my-apps";
import CandidateSearch from "../../components/candidate-inner-header";


export default function MyAppsData() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.myapps.title}</title>
        <meta name="description" content={data.myapps.description} />
        <meta name="keywords" content={data.myapps.keyword} />
      </Head>
      <CandidateSearch />
      <MyAppsFun />
    </>
  );
}
