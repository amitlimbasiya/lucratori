import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const EmpAccountDash = styled.div`
    &.empAccountDash{
        background:var(--platinum);
        padding:40px 0px;
    }
    .dataWhiteBox {
        background: var(--white);
        border-radius: 6px;
        padding: 25px 15px;
        box-shadow: 0px 0px 10px 0px rgba(135,135,135,0.55);
        margin:0px 0px 15px 0px;
    }
    .userAccount {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:10px;
    }
    .userAccount .userImg {
        max-width: 70px;
        height: 70px;
        overflow: hidden;
        display: block;
        margin:0 auto;
    }
    .userAccount .userImg img {
        max-width: 100%;
        object-fit: cover;
        height: 64px;
        width: 64px;
        border-radius: 50%;
    }
    .userAccount .userDataInfo span {
        display: block;
        text-align:center;
    }
    .userAccount .userDataInfo span.userName{
        font-weight:600;
        font-size:28px;
        line-height:34px;
        color:var(--dark-blue);
        margin-bottom:5px;
    }
    .userAccount .userDataInfo span.userPosition{
        font-weight:400;
        font-size:14px;
        line-height:18px;
        color:var(--gray);
    }
    .dwbHeading{
        font-weight:600;
        font-size:18px;
        line-height:24px;
        color:var(--dark-blue);
        margin: 0px 0px 15px 0px;
    }
    .innerInfo p{
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: var(--gray);
        margin: 0px 0px 15px 0px;
        padding: 0px 0px 0px 0px;
    }
    .innerInfo ul{
        margin:0px;
        padding:0px;
        list-style:none;
        
    }
    .innerInfo ul li{
        margin: 0px 0px 15px 0px;
        padding: 0px 0px 0px 0px;
        list-style: none;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: var(--gray);
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .innerInfo ul li .imgBox {
        width: 45px;
        text-align: center;
    }
    .innerInfo ul li .infoBox {
        width: calc(100% - 45px);
        
    }
    .innerInfo ul li img{
        max-width: 21px;
        max-height: 24px;
        width: auto;
        height: auto;
        text-align:center;
        // position: absolute;
        // left: 0;
        // top: 50%;
        // transform: translateY(-50%);
    }
    .innerInfo ul li strong{
        display:block;
        font-weight: 600;
        color:var(--dark-blue);
        margin: 0px 0px 3px 0px;
    }
    .innerInfo ul li a:hover{
        color:var(--red);
    }

    .cardPart{
        background: var(--white);
        border-radius: 12px;
        padding:0px;
        box-shadow: 0px 0px 10px 0px rgba(135,135,135,0.55);
        margin:0px 0px 30px 0px;      
        overflow: hidden;
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

        ${mediaQueries("tabletPortrait")`  
            flex-wrap:wrap;
            gap: 10px;
        `}
        ${mediaQueries("md")`  
            flex-direction: column;
            align-items: flex-start;
        `}
        ${mediaQueries("sm")`  
            padding: 10px 15px;
            gap: 5px;
        `}
    }
    .cardPart .cardHeading .cardLeft{
        font-size:18px;
        font-weight: 600;
    }
    .cardPart .cardHeading .cardRight ul{
        margin:0px;
        padding:0px;
        list-style:none;
        display: flex;
        gap: 20px;
    }
    .cardPart .cardHeading .cardRight ul li{
        margin: 0px;
        padding: 0px;
        list-style: none;
        color: var(--white);
        font-weight: 400;
    }
    .cardPart .cardHeading .cardRight ul li span {
        color: #cccaca;
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

        ${mediaQueries("md")`  
            grid-template-columns: repeat(1, 1fr);
        `}
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