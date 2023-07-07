import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const JobAnnouncementSection = styled.div`
    &.JobAnnouncementSection{
        background:var(--platinum);
        padding:40px 0px;
    }
    .top-information{
        display:flex;
        margin:0px 0px 20px 0px;
    }
    .top-information .numberOfJobs {
        font-size: 18px;
        line-height: 1;
        font-weight: 500;
        color: var(--dark-blue);
    }
    .top-information .numberOfJobs span{
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
        color: var(--red);      
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