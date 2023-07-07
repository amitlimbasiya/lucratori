import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const EmployerJobsListingSection = styled.div`
    &{
        position: relative;
        background: var(--dark-blue);
        padding: 40px 0px;

        ${mediaQueries("sm")`  
            padding:25px 0px;
        `}
    }
    .headingPart h1{
        font-size:22px;
        line-height:32px;
        color:var(--white);
        font-weight: 600;
        margin-bottom: 0px;
    }
    .headingPart p{
        font-size:16px;
        line-height:24px;
        color:var(--white);
        font-weight: 400;
        margin-bottom: 0px;
    }
    .sortingOpts{
        display: flex;
        align-items: center;
        gap:15px;
        justify-content: flex-end;
    }
    .sortingOpts .form-check{
        font-size:16px;
        color:var(--platinum);
        margin: 0px 0px 0px 0px;
    }
    .sortingOpts .form-check .form-check-input{
        background-color:transparent;
    }
    .sortingOpts .form-check .form-check-input:checked {
        background-color: var(--red);
        border-color: var(--red);
    }
    .sortingOpts .form-check .form-check-input:focus{
        outline: 0;
        box-shadow: none;
    }
`;

export const SearchHorizontal = styled.div`
    position: relative;
    z-index: 1;
    display:flex;
    justify-content: space-between;
    gap: 30px;

    ${mediaQueries("sm")`  
        flex-wrap:wrap;
        gap: 15px;
    `}

    &.searchHorizontal p{
        margin: 12px 0px 0px;
        font-size: 12px;
        line-height: 24px;
        font-weight: 400;
        color:var(--gray);
    }
    .redBtn{
        padding:10px 40px;

        ${mediaQueries("sm")`  
            width:100%;
        `}
    }
`;
export const WhiteBox = styled.div`
    &.whiteBox{
        background:var(--white);
        border-radius: 10px;
        padding: 12px 20px;
        max-width: 100%;
        width: 100%;

        ${mediaQueries("sm")`  
            max-width: 100%;
            display:block;
        `}

    }   
    
    .beforeIcon{
        padding: 0px 0px 0px 30px;
        position: relative;
    }
    .beforeIcon img {
        width: 16px;
        height: 16px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .form-control{
        font-size: 16px;
        line-height: 26px;
        font-weight: 300;
        color:var(--gray);
        border:none;
        padding:0px;
        background:transparent;

        :focus{
            box-shadow:none;
            outline:none;
        }
    }
    &.whiteBox button{
        ${mediaQueries("sm")`  
            margin:10px 0px 0px;     
            min-width:100%;
        `}
    }
`;