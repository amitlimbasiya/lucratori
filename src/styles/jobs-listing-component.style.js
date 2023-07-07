import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const JobsListParent = styled.div`
    &.JobsListParent{
        background:var(--platinum);
        padding:40px 0px;
    }
    .top-information{
        display:flex;
        justify-content: space-between;
        gap: 15px;
        margin:0px 0px 40px 0px;
    }
    .top-information .numberOfJobs {
        font-size: 30px;
        line-height: 1;
        font-weight: 400;
        color: var(--dark-blue);
    }
    .top-information .sortingOpts{
        display: flex;
        align-items: center;
        gap:15px;
    }
    .top-information .sortingOpts .form-check{
        font-size:16px;
        color:var(--gray);
        margin: 0px 0px 0px 0px;
    }
    .top-information .sortingOpts .form-check .form-check-input:focus{
        border-color: transparent;
        outline: 0;
        box-shadow: none;
    }
    .top-information .sortingOpts .form-switch.form-check{
        margin: 0px 0px 0px 0px;
    }
    .top-information .sortingOpts .form-switch .form-check-input:focus{
        border-color: transparent;
        outline: 0;
        box-shadow: none;
    }
    .top-information .sortingOpts .form-switch.form-check .form-check-label{
        font-size:16px;
        color:var(--gray);
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
    }
    .sortInfo p{
        color:var(--dark-blue);
    }
    .sortInfo .cName{
        font-size: 14px;
        font-weight: 600;
        line-height: 1.4;
        margin:0px 0px 5px 0px;      
    }
    .sortInfo .scopeOfSalary{
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
        margin:0px 0px 5px 0px;      
    }
    .sortInfo .addressPart{
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
        margin:0px 0px 0px 0px;      
        color:var(--gray);
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

    .filter-item .accordion .accordion-item {
        border: none;
        box-shadow: 0px 0px 10px 0px rgba(135,135,135,0.55);
        margin: 0 0 30px 0;
        border-radius: 8px !important;
        overflow: hidden;
    }
    .filter-item .accordion .accordion-item:first-of-type .accordion-button {
        border-radius: 0 !important;
    }
    .filter-item .accordion .accordion-item .accordion-button:not(.collapsed){
        background: transparent;
    }
    .filter-item .accordion .accordion-item .accordion-button {
        font-weight: 700;
        font-size: 16px;
        border: none;
        box-shadow: none !important;
    }
    .filter-item .accordion .accordion-item .accordion-body{
        padding:0px 20px 20px 20px;
    }
    .filter-item .accordion .accordion-item .form-check {
        margin: 0px 0px 5px 5px;
    }
    .filter-item .accordion .accordion-item .form-check .form-check-label {
        font-size: 14px;
        line-height: 16px;
        font-weight: 400;
    }
    .filter-item .accordion .accordion-item .accordion-body .customHeight{
        height:266px;      
    }
    .filter-item .accordion .accordion-item .accordion-body .form-control{
        background:var(--platinum);
        font-size:14px;
        border:none;
    }
`;