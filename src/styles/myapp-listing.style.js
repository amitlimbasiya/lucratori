import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const MyAppListParent = styled.div`
    &.myAppListParent{
        background:var(--platinum);
        padding:40px 0px;
    }
    .myappsListingPart{
        margin:0px;
        padding:50px;
        list-style:none;
        background: var(--white);
        border-radius: 12px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        min-height: 600px;

        ${mediaQueries("tabletPortrait")`
            padding: 30px;
        `}
        ${mediaQueries("md")`
            padding: 15px;
        `}
    }
    .myappsListingPart .appDataContent{
        position: relative;
        padding: 0 0 20px 60px;
        border-bottom: 1px solid var(--chinese-white);
        margin: 0 0 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${mediaQueries("tabletPortrait")`
            flex-wrap: wrap;
        `}
        ${mediaQueries("sm")`
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            padding: 0 0 20px 50px;
        `}
    }
    .myappsListingPart .appDataContent:last-child{
        margin: 0;
        border-bottom: none;
        padding: 0 0 0px 60px;
    }
    .myappsListingPart .companyDataInfo {
        width: 40%;
        ${mediaQueries("tabletPortrait")`
            width: 35%;
        `}
        ${mediaQueries("md")`
            width: 100%;
        `}
    }
    .myappsListingPart .companyDataInfo .jobHeading{
        font-size: 22px;
        font-weight: 600;
        line-height: 1.4;
        color: var(--dark-blue);

        ${mediaQueries("tabletPortrait")`
            font-size: 18px;
        `}
    }
    .myappsListingPart .companyDataInfo .jobHeading:hover{
        color:var(--red);
    }
    .myappsListingPart .appDataContent .publishadeDate{
        color:var(--dark-blue);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        width: 15%;

        ${mediaQueries("tabletPortrait")`
            width: 20%;
        `}
        ${mediaQueries("md")`
            width: auto;
        `}
    }
    .myappsListingPart .companyName{
        color:var(--gray);
        font-size: 14px;
        font-weight: 600;
        line-height: 1.4;
        margin:0px;
    }
    
    .myappsListingPart .jobCompanyLogo {
        position: absolute;
        left: 0;
        top: 0;
    }
    .myappsListingPart .jobCompanyLogo a {
        width: 48px;
        height: 48px;
        background: var(--platinum);
        border-radius: 5px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        ${mediaQueries("tabletPortrait")`
            width: 38px;
            height: 38px;
        `}
    }
    .myappsListingPart .jobCompanyLogo a img{
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    .actionBtns {
        width: 15%;
        ${mediaQueries("tabletPortrait")`
            width: 20%;
        `}
        ${mediaQueries("md")`
            width: auto;
        `}
    }
    .actionBtns a{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--gray);
        font-size: 16px;
        line-height: 1;
    }
    .actionBtns a span{
        width:32px;
        height:32px;
        text-align:center;
        background:var(--dark-blue);
        border-radius: 50px;
        line-height: 32px;
    }
    .actionBtns a span img{
        -webkit-transition: 0.3s ease;
        transition: 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        max-width: 58%;
        width: 100%;
        height: 100%;
    }
    .actionBtns a:hover{
        color: var(--red);      
    }
    .actionBtns a:hover img{
        transform: scale(1.3);
    }
    .rightAction {
        width: 20%;
        text-align: right;
        
        ${mediaQueries("tabletPortrait")`
            width: 22%;
        `}
        ${mediaQueries("md")`
            width: auto;
        `}
        .redBtn{
            ${mediaQueries("tabletPortrait")`
                padding: 10px 15px;
            `}
        }
    }

    // No Data Found
    .noDataFound{
        margin:0px;
        padding:50px;
        list-style:none;
        background: var(--white);
        border-radius: 12px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        min-height: 600px;
        text-align:center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .noDataFound h2{
        color: var(--dark-blue);
        font-size: 20px;
        line-height: 30px;
        margin: 30px 0 10px;
        font-weight: 600;
    }
    .noDataFound p{
        color: var(--gray);
        font-size: 14px;
        line-height: 24px;
        margin: 0px 0 25px;
        font-weight: 400;
    }
`;