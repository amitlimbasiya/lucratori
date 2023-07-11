import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../styles/mediaQuery.js";

export const Header = styled.div`
    &.header{
        background: var(--white);
    }
    .navbar{
        padding-top:25px;
        padding-bottom:25px;

        ${mediaQueries("sm")`  
            padding-top:15px;
            padding-bottom:15px;
        `}
    }
    .navbar .container{
        position: relative;
    }
    .navbar-brand{
        padding:0px;
        margin-right: 68px;

        ${mediaQueries("tabletLandscape")`  
            margin-right: 28px;
        `}
    }
    .navbar-expand-lg .navbar-nav .nav-link{
        padding:2px 0px 2px;
        margin:0px 32px;
        font-weight:600;
        font-size:16px;
        line-height:18px;
        color:var(--dark-blue);
        border-bottom:2px solid transparent;

        &:hover{
            color:var(--red);
            border-bottom:2px solid var(--red);
        }
    }
    .headerRight{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
    .headerRight a:not(.redBtn){
        font-weight:600;
        font-size:16px;
        line-height:18px;
        color:var(--dark-blue);
    }
    .headerRight a:not(.redBtn):hover{
        color:var(--red);
    }
    .headerRight.smShow{
        display: none;
    }

    .userAccount a {
        display: flex;
        align-items: center;
        gap:10px;
    }
    .userAccount a .userImg {
        max-width: 45px;
        height: 45px;
        overflow: hidden;
        display: block;
    }
    .userAccount a .userImg img {
        max-width: 100%;
        height: auto;
    }
    .userAccount a .userDataInfo span {
        display: block;
    }
    .userAccount a .userDataInfo span.userName{
        font-weight:600;
        font-size:16px;
        line-height:18px;
        color:var(--dark-blue);
    }
    .userAccount a .userDataInfo span.userPosition{
        font-weight:400;
        font-size:12px;
        line-height:14px;
        color:var(--gray);
    }
    .userAccount a svg{
        width:15px;
    }
    .userDataShow {
        z-index: 9;
        position: absolute;
        right: 12px;
        max-width: 815px;
        width: 100%;
        top: 100%;
        padding: 20px;
        border-radius: 0px 0px 18px 18px;
        box-shadow: 0px 9px 10px 0px rgba(135,135,135,.5);
        background: var(--white) url(/images/logo-icon-shape.svg) no-repeat bottom right;
        background-size: 32%;
        border-top: 1px solid var(--chinese-white);

        ${mediaQueries("tabletPortrait")`  
            right: 0px;
            max-width: 100%;
        `}
        ${mediaQueries("md")`  
            padding: 10px 12px;
        `}
    }
    .userDataShow .row {
        ${mediaQueries("md")`  
            gap:15px
        `}
    }
    .userDataShow .col {
        ${mediaQueries("md")`  
            flex: unset;
        `}
    }
    .userDataShow .columnData h2 {
        margin: 0px 0px 15px 0px;
        padding: 0px 0px 10px 0px;
        border-bottom: 1px solid var(--chinese-white);
        color:var(--dark-blue);
        font-size: 20px;
        font-weight: 600;

        ${mediaQueries("md")`  
            margin: 0px 0px 10px 0px;
            font-size: 18px;
        `}
    }
    .userDataShow .columnData ul {
        margin: 0px;
        padding: 0;
        list-style: none;
    }
    .userDataShow .columnData ul li:not(:last-child) {
        margin: 0px 0px 8px 0px;
    }
    .userDataShow .columnData ul li a{
        font-weight:600;
        font-size:14px;
        line-height:16px;
        color:var(--gray);
        display:inline-block;
    }
    .userDataShow .columnData ul li a:hover{
        color:var(--red);
    }
    ${mediaQueries("tabletPortrait")`  
        .navbar-brand{
            margin-right:auto;
        }
        .navbar-toggler{
            border:none;
            padding:0px;
            margin-left: 15px;
        }
        .navbar-toggler:focus{
            box-shadow:none;
        }
        .navbar-collapse{
            position: absolute;
            width: 100%;
            margin: 0 auto;
            top: 90px;
            z-index: 9;
            left: 0;
            background: var(--white);
            border-top: 1px solid var(--chinese-white);
            padding: 0px 0px 0px;
        }
        .navbar-collapse:before{
            content:'';
        }
        .navbar-expand-lg .navbar-nav .nav-link{
            padding: 0px 12px 10px;
            margin: 10px 0px 0px;
            font-weight: 600;
            font-size: 16px;
            line-height: 18px;
            color: var(--dark-blue);
            border-bottom: 1px solid var(--chinese-white);
        }
        .navbar-expand-lg .navbar-nav .nav-link:nth-last-of-type{
            margin: 0px 0px 0px;            
            border-bottom:0px;
        }
    `}
    ${mediaQueries("sm")`  
        .headerRight.smShow{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            padding: 10px 12px 10px 12px;
        }
        .headerRight.smHide{
            display: none;
        }
        .navbar-collapse{
            top: 70px;
        }
        .userAccount a .userImg {
            max-width: 40px;
            height: 40px;
        }
        .userDataInfo {
            display: none;
        }
        .userAccount a svg {
            width: 12px;
        }
    `}
`;
