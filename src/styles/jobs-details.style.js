import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const JobsDetailsParent = styled.div`
    &.JobsDetailsParent{
        background:var(--platinum);
        padding:0px 0px 50px;
        border-top: 120px solid var(--dark-blue);

        .container{
            position: relative;
            top: -70px;
            margin-bottom: -70px;;
        }
    }

    .jobdetails-criteria,
    .jobdetails-logobox{
        background-color: var(--white);
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
        width: 100%;
        align-items: center;
        margin-bottom: 15px;
        display: grid;
        grid-template-columns: 30px auto;
        grid-column-gap: 10px;
    }
    .jd-criteria-info {
        width: 100%;
    }
    .jd-criteria-info p{
        font-weight:700;
        font-size: 16px;
        line-height: 20px;
    }
    .jd-criteria-info span{
        display: block;
        color: var(--gray);
        font-size: 15px;
    }
    .jobdetails-criteria ul{
        width: 100%;
        display: block;
        list-style: none;
        margin: 0px;
        padding: 0px;
    }
    .jobdetails-criteria ul li{
        list-style: none;
        margin: 0px 0px 15px 0px;
        padding: 0px;
    }
    .jobdetails-criteria ul li a img{
        max-width: 16px;
        max-height: 18px;
        width: auto;
        height: auto;
        transition: 0.3s ease;
    }
    .jobdetails-criteria ul li a{
        display: grid;
        grid-template-columns:30px auto;
        grid-column-gap: 10px;
        align-items: center;

        &:hover{
            color: var(--red);
        }
        &:hover img{
            transform: scale(1.3);
        }
    }
    
    .jobdetails-contentbar{
        background-color: var(--white);
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);

        ${mediaQueries("md")`  
            padding: 20px;
        `}
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
        color: var(--dark-blue);

        ${mediaQueries("md")`  
            font-size: 22px;
        `}
    }

    .listing-block p,
    .jobdetails-title-left p{
        color: var(--gray);
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

        ${mediaQueries("md")`  
            margin-top: 50px;
        `}
        
    }
    .jobsListingPart h3,
    .jobdetails-inner-box h3{
        color: var(--dark-blue);
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
        color: var(--gray);
        font-size: 16px;
        line-height: 1;
    }
    .leftAction a{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--gray);
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
        color: var(--gray);
    }
    .listing-block ul {
        padding-left: 15px;
    }
    .listing-block ul li {
        color: var(--gray);
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
        background: var(--white);
        border-radius: 20px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    }
    .jobsListingPart ul li:last-child{
        margin-bottom:0px;
    }
    .jobsListingPart ul li .jobTopPart .jobHeading{
        font-size: 18px;
        font-weight: 600;
        line-height: 1.4;
        margin-right: 10px;
        color: var(--dark-blue);
    }
    .jobsListingPart ul li .jobTopPart .jobHeading:hover{
        color:#ff0000;
    }
    .jobsListingPart ul li .jobTopPart .publishadeDate{
        color:var(--gray);
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
    }
    .jobsListingPart ul li .companyName{
        color:var(--gray);
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
        background: var(--platinum);
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