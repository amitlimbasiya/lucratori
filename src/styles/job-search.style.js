import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const JobSection = styled.div`
    {
        position: relative;
        background:var(--dark-blue);
        padding:40px 0px;

        ${mediaQueries("sm")`  
            padding:25px 0px;
        `}
    }
`;
export const SearchHorizontal = styled.div`
    position: relative;
    z-index: 1;
    display:flex;
    justify-content: space-between;
    gap: 30px;

    ${mediaQueries("sm")`  
        gap:15px;
        flex-wrap:wrap;
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