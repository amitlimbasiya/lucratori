import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const CVSection = styled.div`
    {
        position: relative;
        background: var(--dark-blue);
        min-height: 120px;
    }
`;
export const CVDataSection = styled.div`
    {
        position: relative;
        background: var(--platinum);
        padding: 0px 0px 50px;
    }
    .topUp{
        position: relative;
        top: -70px;
        margin-bottom: -70px;
    }
    .dataWhiteBox {
        background: var(--white);
        border-radius: 6px;
        padding: 15px;
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
        height: auto;
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

        ${mediaQueries("tabletPortrait")`
            font-size:24px;
            line-height:30px;
        `}
    }
    .userAccount .userDataInfo span.userPosition{
        font-weight:400;
        font-size:16px;
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
        font-size: 16px;
        line-height: 18px;
        color: var(--gray);
        position: relative;
        
    }
    .innerInfo ul li a{
        display: grid;
        grid-template-columns: 10% auto;
        grid-column-gap: 10px;

        ${mediaQueries("tabletPortrait")`
            grid-template-columns: 25px 90%;
        `}
    }
    .innerInfo ul li a img{
        max-width: 16px;
        max-height: 18px;
        width: auto;
        height: auto;
        text-align: center;
        margin: auto;
        transition: 0.3s ease;
    }
    .innerInfo ul li a:hover{
        color:var(--red);
    }
    .innerInfo ul li a:hover img{
        transform: scale(1.3);
    }
    .innerInfo .redBtn{
        width:100%;
    }
    .visiblilityStatus span {
        position: relative;
        padding: 0px 0px 0px 20px;
        display: block;
        font-size: 14px;
        line-height: 1;
        color: var(--gray);
        margin: 0 0 15px 0;
    }
    .visiblilityStatus span.active:before{
        background: var(--red);
    }
    .visiblilityStatus span:before {
        content: '';
        position: absolute;
        left: 0;
        top: 2px;
        width: 10px;
        height: 10px;
        background: var(--gray);
        border-radius: 50%;
    }
    .bigWhiteBox{
        margin: 0px 0px 30px;
        padding: 25px;
        list-style: none;
        background: var(--white);
        border-radius: 12px;
        box-shadow:0px 0px 10px 0px rgba(135,135,135,0.55);

        ${mediaQueries("md")`
            padding:15px;
        `}
    }
    .bigWhiteBox:last-child{
        margin: 0px;
    }
    .bigWhiteBox .headingPart{
        font-weight:600;
        font-size:24px;
        line-height:34px;
        color:var(--dark-blue);
        margin: 0px 0px 30px 0px;      
        padding:0px 0px 10px 0px;      
        border-bottom:2px solid #e2e2e2;

        ${mediaQueries("tabletPortrait")`
            font-size:22px;
            line-height:28px;
        `}
        ${mediaQueries("md")`
            font-size:20px;
            line-height:20px;
            margin: 0px 0px 15px 0px;
            padding: 0px 0px 10px 0px;
        `}
    }
    .bigWhiteBox ul{
        margin:0px;
        padding:0px;
        list-style:none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 15px;
        
        ${mediaQueries("tabletPortrait")`
            grid-template-columns: repeat(2, 1fr);
        `}
        ${mediaQueries("sm")`
            grid-template-columns:1fr;
        `}
    }
    .bigWhiteBox ul li{
        margin: 0px 0px 15px 0px;
        padding: 0px 0px 0px 30px;
        list-style: none;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: var(--gray);
        position: relative;
    }
    .bigWhiteBox ul li img{
        max-width: 21px;
        max-height: 24px;
        width: auto;
        height: auto;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .bigWhiteBox ul li span{
        display:block;
        font-weight: 600;
        color:var(--dark-blue);
        margin: 0px 0px 3px 0px;
    }
    .fillebleData{
        min-height:150px;
    }
    .fillebleData p{
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: var(--gray);
    }
`;