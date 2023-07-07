import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const empJobData = styled.div`
    &{
        position: relative;
    }
    .accordion-item {
        border: none;
        background: var(--white);
        border-radius: 20px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        padding: 25px;
        margin-bottom: 30px;

        ${mediaQueries("sm")`
            padding: 15px;
            border-radius: 10px;
        `}
    }
    .accordion-item .jobData{
        position: relative;
    }
    .accordion-item .jobData .accordion-header .accordion-button{
        width: auto;
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 0;
        background: transparent;
        border: none;
        box-shadow: none;
    }
    .accordion-item .jobData .accordion-header .accordion-button:after {
        content: 'Expand';
        width: auto;
        height: auto;
        padding-left: 25px;
        font-size: 14px;
        line-height: 1.4;
        font-weight: 400;
        color: var(--gray);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.78 11.78'%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath d='M5.89,11.78a5.89,5.89,0,1,1,5.89-5.89A5.9,5.9,0,0,1,5.89,11.78ZM5.89.32a5.57,5.57,0,1,0,5.57,5.57A5.58,5.58,0,0,0,5.89.32Zm.16,9V2.56a.16.16,0,1,0-.32,0V9.3a.16.16,0,0,0,.32,0ZM9.42,5.93a.16.16,0,0,0-.16-.16H2.52a.16.16,0,1,0,0,.32H9.26A.16.16,0,0,0,9.42,5.93Z' style='fill:%237d7d7d'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-position: left -25px top;
        background-size: 85% 85%;
    }
    .accordion-item .jobData .accordion-header .accordion-button:not(.collapsed)::after{
        content: 'Compact';
        width: auto;
        height: auto;
        padding-left: 25px;
        font-size: 14px;
        line-height: 1.4;
        font-weight: 400;
        color: var(--gray);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.88 20.88'%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Object'%3E%3Cpath d='M10.44,20.88A10.44,10.44,0,1,1,20.88,10.44,10.45,10.45,0,0,1,10.44,20.88Zm0-20.31a9.87,9.87,0,1,0,9.87,9.87A9.88,9.88,0,0,0,10.44.57Zm6.26,9.94a.28.28,0,0,0-.29-.28H4.46a.28.28,0,1,0,0,.56h12A.28.28,0,0,0,16.7,10.51Z' style='fill: %237c7c7c;'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-position: left -25px top;
        background-size: 85% 85%;
        transform: unset;
    }
    .jobPosition {
        padding: 0px 90px 15px 72px;
        position: relative;
        display: flex;
        flex-direction: column;

        ${mediaQueries("sm")`
            padding: 0px 0px 15px 0px;
        `}
    }
    .jobPosition .statusBtn {
        left: 0px;
        top: 4px;
        position: absolute;

        ${mediaQueries("sm")`
            position: relative;
            width: max-content;
            top: 0;
        `}
    }
    .jobHeading{
        font-size: 14px;
        line-height: 1.4;
        font-weight: 400;
        color:var(--gray);
        margin-bottom: 5px;

        ${mediaQueries("sm")`
            margin-top: 5px;
        `}
    }
    .jobHeading a {
        font-size: 18px;
        line-height: 1.4;
        font-weight: 600;
        margin-right: 8px;
        color:var(--dark-blue);

        ${mediaQueries("sm")`
            display:block;
        `}
    }
    .jobHeading a:hover{
        color:var(--red);
    }
    .myjobApplicants {
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 16px;
        font-weight: 500;
        color:var(--gray);
    }
    .myjobApplicants .views,
    .myjobApplicants a{
        display:inline-block;
    }
    .myjobApplicants .views:after{
        content:'|';
        margin:0px 10px;
    }
    .myjobApplicants svg {
        width: 16px;
        height: 16px;
        margin-right: 4px;
    }
    .applicantsData a{
        display:inline-block;
    }
    .applicantsData a:hover{
        color:var(--red);
    }   
    .applicantsData a:not(:last-child):after{
        content:'/';
        margin:0px 5px;
    }
    .jobData .accordion-body {
        padding: 0px 0px 0px 0px;
        border-top: 1px solid var(--chinese-white);
    }
    .jobData .accordion-body ul {
        margin: 0;
        padding: 0;
        list-style: none;
        align-items: center;
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(7, 1fr);

        ${mediaQueries("tabletPortrait")`
            grid-template-columns: repeat(3, 1fr);
        `}
        ${mediaQueries("sm")`
            grid-template-columns: repeat(2, 1fr);
        `}
    }
    .jobData .accordion-body ul li {
        font-size: 14px;
        text-align: center;
        border-right: 1px solid var(--chinese-white);
        padding: 15px 15px;
        color: var(--gray);

        ${mediaQueries("tabletPortrait")`
            border-bottom: 1px solid var(--chinese-white);
            padding: 10px;
        `}
    }
    .jobData .accordion-body ul li strong{
        display:block;
        font-size:18px;
        color:var(--dark-blue);        
    }
    .jobData .accordion-body ul li:nth-child(3n){
        ${mediaQueries("tabletPortrait")`
            border-right: 1px solid transparent;
        `}
        ${mediaQueries("sm")`
            border-right: 1px solid var(--chinese-white);
        `}
    }
    .jobData .accordion-body ul li:nth-child(2n){
        ${mediaQueries("sm")`
            border-right: 1px solid transparent;
        `}
    }
    .jobData .accordion-body ul li:last-child{
        border-right: 1px solid transparent;
        ${mediaQueries("tabletPortrait")`
            border-bottom: 1px solid transparent;
        `}
    }
    .myjobFooter {
        justify-content: space-between;
        display: grid;
        grid-template-columns: 80% 20%;
        grid-column-gap: 0px;
        align-items: center;
        border-top: 1px solid var(--chinese-white);
        padding-top: 15px;

        ${mediaQueries("tabletPortrait")`
            grid-template-columns: 1fr;
            padding-top: 5px;
        `}
    }
    .myjobFooter .btnGroup {
        display: flex;
        align-items: center;
        
        ${mediaQueries("tabletPortrait")`
            flex-wrap:wrap;
        `}

    }
    .myjobFooter .btnGroup a {
        background: #e2e2e2;
        padding: 5px 10px;
        font-size: 13px;
        border-radius: 4px;
        line-height: 16px;
        display: flex;
        color: var(--dark-blue);
        text-align: center;
        margin-right: 15px;
        align-items: center;
        gap: 5px;

        ${mediaQueries("tabletPortrait")`
            margin:10px 10px 0px 0px;
        `}
        ${mediaQueries("sm")`
            margin:5px 5px 0px 0px;
        `}
    }
    .myjobFooter .btnGroup a:hover{
        background:var(--red);
        color:var(--white);
    }
    .myjobFooter .jobDates{
        font-size: 13px;
        line-height:16px;
        padding: 0px;
        color: var(--gray);
        text-align: right;

        ${mediaQueries("tabletPortrait")`
            text-align: left;
            margin:15px 0 0 0;
        `}
    }  
    .myjobFooter .jobDates div{
        ${mediaQueries("tabletPortrait")`
            display:inline-block;
            margin:0px 5px;
        `}
    }
    .myjobFooter .jobDates div:not(:last-child){
        margin-bottom:5px;
        ${mediaQueries("tabletPortrait")`
            margin-bottom:0px;
        `}
    }
    .myjobFooter .btnGroup a svg {
        width: 14px;
        height: 14px;
    }
`;
