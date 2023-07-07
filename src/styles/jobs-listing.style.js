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

        ${mediaQueries("sm")`  
            flex-wrap:wrap;
        `}

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

        ${mediaQueries("sm")`  
            flex-wrap:wrap;
        `}
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
    
    .filter-item{
        ${mediaQueries("sm")`  
            padding: 0 0 20px 0;
        `}
    }
    .filter-item .accordion .accordion-item {
        border: none;
        box-shadow: 0px 0px 10px 0px rgba(135,135,135,0.55);
        margin: 0 0 30px 0;
        border-radius: 8px !important;
        overflow: hidden;

        ${mediaQueries("sm")`  
            margin: 0 0 20px 0;
        `}
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