import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const CompnayEmaileAlertSetting = styled.div`
    &.compnayEmailAlert{
        background:var(--platinum);
        padding:60px 0px 30px;

        ${mediaQueries("md")`  
            padding:40px 0px 10px;
        `}
    }
    .cardPart{
        background: var(--white);
        padding:0px;
        box-shadow: 0px 0px 10px 0px rgba(135,135,135,0.55);
        margin:0px 0px 30px 0px;      
        overflow: hidden;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    .cardPart .cardHeading{
        background: var(--dark-blue);
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        padding: 15px 30px;
        color: var(--white);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size:16px;
        font-weight: 500;

        ${mediaQueries("md")`  
            padding:15px;
        `}
    }
    .cardPart .cardHeading .cardLeft{
        font-size:18px;
        font-weight: 600;
    }
    .dataOptionPart p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color:var(--dark-blue);
    }
    .dataOptionPart p span{
        color: var(--gray);
    }
    .dataOptionPart p:last-child{
        margin:0px;
    }
    .dataOptionPart p a:hover{
        color:var(--red);
    }
    .dataOptionPart ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .dataOptionPart ul li {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--dark-blue);
        border-bottom:1px solid #e1e1e1;
        margin:0px 0px 15px 0px;
        padding:0px 0px 15px 0px;
    }  
    .dataOptionPart ul li span {
        color: var(--gray);
        display: block;
    }
    .dataOptionPart ul li:last-child,
    .dataOptionPart ul li:nth-last-of-type(-n+2):not(:nth-child(even))
     {
        margin: 0;
        padding: 0;
        border-bottom: none;
    }
    .dataOptionPart ul li a:hover{
        color:var(--red);
    }
`;