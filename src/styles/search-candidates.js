import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const SearchParent = styled.div`
    &.searchParent{
        background:var(--platinum);
        padding:40px 0px;
    }
    .searchPart{
        margin:0px 0px 30px 0px;
        padding:50px;
        list-style:none;
        background: var(--white);
        border-radius: 12px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);

        ${mediaQueries("tabletLandscape")`  
            padding:30px;
        `}
        ${mediaQueries("sm")`  
            padding:20px;
        `}
    }
    .searchPart h3{
        font-size: 26px;
        line-height: 36px;
        font-weight: 600;
        color:var(--dark-blue);
        margin-bottom: 30px;

        ${mediaQueries("tabletLandscape")`  
            font-size: 22px;
            line-height: 32px;
            margin: 0px 0px 20px 0px;      
        `}
        ${mediaQueries("sm")`  
            font-size: 20px;
            line-height: 30px;
        `}
    }
    .headingPart{
        font-weight:600;
        font-size:26px;
        line-height:36px;
        color:var(--dark-blue);
        margin: 0px 0px 50px 0px;      
        padding:0px 0px 15px 0px;      
        border-bottom:2px solid #e2e2e2;

        ${mediaQueries("tabletLandscape")`  
            margin: 0px 0px 25px 0px;      
        `}
        
    }
    .searchPart .btn{
        padding: 10px 40px;
        min-height:51px;
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
        gap: 20px;
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
        background:var(--platinum);
        border-radius: 10px;
        padding: 12px 20px;
        max-width: 100%;
        width: 100%;

        ${mediaQueries("sm")`  
            max-width: 100%;
            display:block;
            padding: 12px 20px;
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