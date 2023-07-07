import { mediaQueries, mediaQueriesmin } from "../styles/mediaQuery.js";
import styled, { css } from "styled-components";

export const jobsListing = styled.div`
    &.jobsListing{
        background: url(/images/jobs-bg.jpg) no-repeat center center;
        background-size: cover;
        padding:70px 0px;

        ${mediaQueries("tabletLandscape")`  
            padding:50px 0px;
        `}
    }
    .topText{
        margin: 0px 0px 70px;

        ${mediaQueries("tabletLandscape")`  
            margin: 0px 0px 50px;
        `}
        ${mediaQueries("sm")`  
            margin: 0px 0px 30px;
        `}
    }
    .topText h2{
        margin: 0px 0px 20px;
        font-size:45px;
        line-height: 50px;
        font-weight: 600;
        color:var(--dark-blue);

        ${mediaQueries("tabletLandscape")`  
            font-size:40px;
            line-height: 45px;
            margin: 0px 0px 10px;
        `}
        ${mediaQueries("tabletPortrait")`  
            font-size:32px;
            line-height:38px;
        `}
        ${mediaQueries("sm")`  
            font-size:28px;
            line-height:38px;
        `}
    }
    .topText p{
        margin: 0px 0px 0px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color:var(--gray);
    }
    .category-item{
        position: relative;
        margin-bottom: 24px;
        border-radius: 10px;
        border: 1px solid rgba(89,89,89,0.2);
        padding: 21px 10px 20px 60px;
        background:var(--white);
        text-align:center;
        font-size:12px;
        transition: 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        :hover{
            transform: translateY(-10px);
            box-shadow: #00000029 0 10px 36px, #0000000f 0 0 0 1px;
        }

        ${mediaQueries("tabletLandscape")`  
            margin: 0px 0px 50px;
        `}
        ${mediaQueries("tabletPortrait")`  
            margin: 0px 0px 24px;
        `}
    }
    .category-item .icon{
        top: 0;
        left: 0;
        z-index: 1;
        width: 50px;
        height: 100%;
        text-align: center;
        position: absolute;
        border-radius: 10px 0 0 10px;

        :before{
            inset: 0;
            z-index: -1;
            content: "";
            opacity: 1;
            position: absolute;
            border-radius: 10px 0 0 10px;
            background-color: var(--red);
        }
        svg{
            fill:var(--white);
            left: 50%;
            top: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            width: 24px;
            height: 24px;
        }
    }
    .category-item h3{
        margin-bottom: 4px;
        font-size: 20px;

        ${mediaQueries("sm")`  
            font-size:18px;
        `}

        a{
            font-weight: 500;
            color:var(--dark-blue);
        }
    }
    .category-item:hover h3 a{
        color:var(--red);
    }
    .category-item span{
        display: block;
        color: var(--gray);
    }
`;