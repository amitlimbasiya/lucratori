import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { data } from "../../data/Seo";
import ChangeCoverPhoto from "../../components/company-profile-cover-data";
import CompnayHeader from "../../components/company-profile-header";
import CompnayAboutInfo from "../../components/company-profile-information";
import CompnayJobsListing from "../../components/company-profile-jobs-listing";
import CompnayProfileShare from "../../components/company-profile-share";
import CompnayProfileContact from "../../components/company-profile-contact";

export default function CompanyProfile() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.compayProfile.title}</title>
        <meta name="description" content={data.compayProfile.description} />
        <meta name="keywords" content={data.compayProfile.keyword} />
      </Head>
      <ChangeCoverPhoto />
      <CompnayHeader />
      <CompnayAboutInfo />
      <CompnayJobsListing />
      <CompnayProfileShare />
      <CompnayProfileContact />
    </>
  );
}
