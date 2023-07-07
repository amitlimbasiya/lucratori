import { mediaQueries, mediaQueriesmin } from "../styles/mediaQuery.js";
import styled, { css } from "styled-components";

export const HeroSection = styled.div`
    &.heroBanner{
        position: relative;
        background:var(--gainsboro);
        overflow: hidden;
    }
    .container{
        padding-top: 165px;
        padding-bottom: 165px;
        position: relative;

        ${mediaQueries("tabletLandscape")` 
            padding-bottom: 120px;
        `}

        ${mediaQueries("tabletPortrait")` 
            padding-top: 80px;
            padding-bottom: 0px;
        `}

        ${mediaQueries("sm")` 
            padding-top: 50px;
        `}

        :before{
            content:"";
            background: url(/images/logo-icon-shape.svg) no-repeat center center;
            background-size: cover;
            width: 604px;
            height: 436px;
            position: absolute;
            bottom: 0;
            left: -150px;
        }
    }
    .banner-text{
        position: relative;
        z-index: 1;
    }
    .banner-text h1{
        margin: 0px 0px 20px;
        font-size:45px;
        line-height: 50px;
        font-weight: 600;
        color:var(--dark-blue);

        ${mediaQueries("tabletPortrait")` 
            font-size:36px;
            line-height: 46px;
        `}
        ${mediaQueries("sm")`  
            font-size:30px;
            line-height: 40px;
        `}
    }
    .banner-text h1 br{
        ${mediaQueries("sm")`  
            display:none;
        `}
    }
    .banner-text p{
        margin: 0px 0px 30px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color:var(--gray);

        ${mediaQueries("md")`  
            margin: 0px 0px 20px;
        `}
    }
    .banner-text p br{
        ${mediaQueries("sm")`  
            display:none;
        `}
    }
`;
export const LadyPart = styled.div`
    &.lady-img-part{
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 0;

        ${mediaQueries("tabletPortrait")` 
            position: relative;
            text-align: center;
            margin-top:50px;
        `}
    }
    &.lady-img-part img{
        height: auto;
        max-height: 577px;
        width: auto;

        ${mediaQueries("tabletLandscape")` 
            max-height: 450px;
        `}

        ${mediaQueries("sm")` 
            max-height: unset;
            max-width: 100%;
        `}
            
    }
     
`;
export const SearchHorizontal = styled.div`
    position: relative;
    z-index: 1;

    &.searchHorizontal p{
        margin: 12px 0px 0px;
        font-size: 12px;
        line-height: 24px;
        font-weight: 400;
        color:var(--gray);
    }
`;
export const WhiteBox = styled.div`
    &.whiteBox{
        background:var(--white);
        border-radius: 10px;
        padding: 12px 10px 12px 20px;
        max-width: 600px;
        display: flex;
        align-items: center;
        gap: 15px;

        ${mediaQueries("md")`  
            max-width: 580px;
        `}

        ${mediaQueries("sm")`  
            max-width: 100%;
            display:block;
            padding: 20px;
        `}

    }   
    .lineShape {
        height: 30px;
        background: #c7c7c7;
        width: 1px;
        display: block;

        ${mediaQueries("sm")`  
            height: 1px;
            width: 100%;  
            margin:10px 0px;         
        `}
    }
    .keywordField{
        min-width:270px;

        ${mediaQueries("md")`  
            min-width:200px;
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
        font-size: 14px;
        line-height: 24px;
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