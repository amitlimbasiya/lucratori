import { mediaQueries, mediaQueriesmin } from "../styles/mediaQuery.js";
import styled, { css } from "styled-components";

export const CtaSection = styled.div`
    &.ctaSection{
        position: relative;
        padding:25px 0px 0px 0px;
        background: url(/images/cta-shap-bg.jpg) no-repeat center center;
        background-size: cover;
        color:var(--white);

        ${mediaQueries("tabletPortrait")`  
            padding:50px 0px 0px 0px;
        `}
    }
    .cta-text{
        ${mediaQueries("tabletPortrait")`  
            text-align:center;
            margin-bottom:50px;
        `}
        ${mediaQueries("sm")`  
            margin-bottom:30px;
        `}
    }
    .cta-text h3{
        margin: 0px 0px 30px;
        font-size:45px;
        line-height: 50px;
        font-weight: 600;

        ${mediaQueries("tabletPortrait")`  
            font-size: 38px;
            line-height: 48px;
        `}
        ${mediaQueries("sm")`  
            font-size: 30px;
            line-height: 40px;
            margin: 0px 0px 20px;
        `}
    }
    .cta-text p{
        margin: 0px 0px 30px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        ${mediaQueries("sm")`  
            margin: 0px 0px 20px;
        `}
    }
    .cta-text p br{
        ${mediaQueries("sm")`  
            display:none;
        `}
    }
    .img-part img {
        height: auto;
        max-height: 420px;
        width: auto;

        ${mediaQueries("sm")`  
            max-height: 250px;
        `}
    }
`;