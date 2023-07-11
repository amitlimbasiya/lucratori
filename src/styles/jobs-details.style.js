import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const JobsDetailsParent = styled.div`
    &.JobsDetailsParent{
        background:#eae8e8;
        padding:0px 0px 50px;
        border-top: 120px solid #030f21;

        .container{
            position: relative;
            top: -70px;
            margin-bottom: -70px;;
        }
    }

    .jobdetails-criteria,
    .jobdetails-logobox{
        background-color: #fff;
        border-radius: 6px;
        text-align: center;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
        margin-bottom: 20px;
    }
    .jobdetails-logobox img{
        width: 40px;
    }
    .jobdetails-logobox h3 {
        margin-top: 10px;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 24px;
    }
    .jd-criteria-info p,
    .jobdetails-logobox p {
        margin-bottom: 0;
        font-size: 12px;
    }
    .jobdetails-criteria {
        text-align: left;
        align-items: flex-start;
    }
    .jobdetails-criteria h3{
        font-size: 20px;
        text-align: left;
        font-weight: 600;
        margin-bottom: 15px;
    }
    .jd-criteria-box{
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 15px;
    }
    .jd-criteria-info {
        width: 100%;
        padding-left: 10px;
    }
    .jd-criteria-info p{
        font-weight:700;
        font-size: 16px;
        line-height: 20px;
    }
    .jd-criteria-info span{
        display: block;
        color: #7c7c7c;
        font-size: 15px;
    }


    .jobdetails-contentbar{
        background-color: #fff;
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    }
    
    .jobdetails-title-block {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #e2e2e2;
        padding-bottom: 20px;
        margin-bottom: 30px;

        ${mediaQueries("sm")`  
            display: block;


            .jobdetails-title-right{
                margin-top: 15px;
            }
        `}
    }

    .jobdetails-title-block h1{
        font-size: 30px;
        font-weight: 600;
        color: #030f21;
    }

    .listing-block p,
    .jobdetails-title-left p{
        color: #7c7c7c;
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 5px;
    }
    .jobdetails-title-left span{
        font-size: 16px;
    }
    .jobdetails-inner-box:not(:last-child){
        margin-bottom: 30px;
    }

    .jobsListingPart{
        margin-top: 70px;
    }
    .jobsListingPart h3,
    .jobdetails-inner-box h3{
        color: #030f21;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 5px;
    }
    .jobsListingPart h2 {
        font-weight: 600;
        font-size: 26px;
        margin-bottom: 20px;
    }
    .leftAction {
        display: flex;
        align-items: center;
        gap: 20px;
        color: #7c7c7c;
        font-size: 16px;
        line-height: 1;
    }
    .leftAction a{
        display: flex;
        align-items: center;
        gap: 10px;
        color: #7c7c7c;
        font-size: 16px;
        line-height: 1;
    }
    .leftAction a img{
        transition: 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
    }
    .leftAction a:hover{
        color: #ff0000;      
    }
    .leftAction a:hover img{
        transform: scale(1.1);
    }

    .jobdetails-inner-box p{
        font-size: 16px;
        color: #7c7c7c;
    }
    .listing-block ul {
        padding-left: 15px;
    }
    .listing-block ul li {
        color: #7c7c7c;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 5px;
        position: relative;
    }

    .jobsListingPart ul{
        margin:0px;
        padding:0px;
        list-style:none;
    }
    .jobsListingPart ul li{
        margin:0px 0px 30px 0px;
        padding:20px;
        list-style:none;
        background: #fff;
        border-radius: 20px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    }
    .jobsListingPart ul li .jobTopPart .jobHeading{
        font-size: 18px;
        font-weight: 600;
        line-height: 1.4;
        margin-right: 10px;
        color: #030f21;
    }
    .jobsListingPart ul li .jobTopPart .jobHeading:hover{
        color:#ff0000;
    }
    .jobsListingPart ul li .jobTopPart .publishadeDate{
        color:#7c7c7c;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
    }
    .jobsListingPart ul li .companyName{
        color:#7c7c7c;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.4;
        margin:0px 0px 20px 0px;
    }
    .jobsListingPart ul li .jobCardContent{
        position: relative;
        padding: 0 0 20px 60px;
        border-bottom: 1px solid #e1e1e1;
        margin: 0 0 20px 0;
    }
    .jobsListingPart ul li .jobCompanyLogo {
        position: absolute;
        left: 0;
        top: 0;
    }
    .jobsListingPart ul li .jobCompanyLogo a {
        width: 40px;
        height: 40px;
        background: #eae8e8;
        border-radius: 5px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .jobsListingPart ul li .jobCompanyLogo a img{
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    .jobsListingPart ul li .jobCardActions {
        padding: 0 0 0 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ${mediaQueries("sm")`  
            display: block;
            
        .rightAction{
            margin-top: 20px;
        }

        `}

    }

`;