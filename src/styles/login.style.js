import { mediaQueries, mediaQueriesmin } from "../styles/mediaQuery.js";
import styled, { css } from "styled-components";

export const section = styled.div`
    &.Section{
        background: var(--platinum);
        padding: 25px 25px;
        min-height:100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        ${mediaQueries("tabletLandscape")`  
            justify-content: flex-start;
        `}
        ${mediaQueries("md")`  
             padding: 12px;
        `}

        .logoPartparent{
            position:absolute;
            left:12px;
            top:25px;
            z-index: 99;

            ${mediaQueries("tabletLandscape")`  
                position: relative;
                top: 0;
                left: auto;
                margin-bottom: 20px;
                right: auto;
                text-align: center;
            `}
            ${mediaQueries("tabletPortrait")`  
                position: relative;
                top: 0;
                left: auto;
                margin-bottom: 20px;
                right: auto;
                text-align: center;
            `}
        }
        .logoPart{
            display:inline-block;
        }
        .container{
            padding:0px;
        }
    }  
`;
export const parentPart = styled.div`

    display: flex;
    align-items: center;
    padding:15px;
    gap:10px;
    background: var(--white) url(/images/logo-icon-shape.svg) no-repeat bottom right;
    background-size: 18%;
    min-height:640px;

    ${mediaQueries("tabletPortrait")`  
        flex-wrap:wrap;        
    `}

    &.parentPart .imgBox{
        align-self: stretch;
        max-width: 644px;
        width: 100%;
        overflow: hidden;
        position: relative;
        aspect-ratio: 16 / 9;

        ${mediaQueries("tabletPortrait")`  
            max-width:100%;    
        `}
        ${mediaQueries("sm")`  
            aspect-ratio: 3 / 4;
        `}
    }
    &.parentPart .imgBox img{
        object-fit: cover;
        object-position: center;
        max-width: 100%;
        height: 100%;
    }
    &.parentPart .imgBox .overlayText{
        position: absolute;
        bottom: 0px;
        left: 0;
        color: #9d9d9e;
        padding: 40px 160px 40px 40px;
        background: var(--black);
        background: linear-gradient(0deg, #000000, #00000000);
        width: 100%;

        ${mediaQueries("tabletLandscape")`  
            padding:20px;
        `}
        ${mediaQueries("tabletPortrait")`  
            text-align:center;
        `}
        
    }
    &.parentPart .imgBox .overlayText h2{
        color:var(--white);
        font-size: 30px;
        
        ${mediaQueries("md")`  
            font-size: 24px;    
        `}
        ${mediaQueries("sm")`  
            font-size: 20px;    
        `}
    }
    &.parentPart .imgBox .overlayText p{
        font-size:14px;
        font-weight:400;
        margin:0px;
    }   
    &.parentPart .imgBox .overlayText.stepBar{
        padding: 80px 40px 40px 40px;

        ${mediaQueries("tabletLandscape")`  
            padding:80px 30px 40px 30px;
        `}
        ${mediaQueries("sm")`  
            padding: 40px 15px 30px 15px;
        `}
    }   
    &.parentPart .imgBox .overlayText.stepBar ul{
        margin:0px;
        padding:0px;
        display: flex;
        align-items: center;
        justify-content: center;
        position:relative;

        ${mediaQueries("tabletPortrait")`  
            max-width: 522px;
            margin: 0 auto;
        `}
        ${mediaQueries("md")`  
            max-width: 522px;
        `}
    }
    &.parentPart .imgBox .overlayText.stepBar ul li{
        text-align:center;
        margin:0px;
        padding:0px;
        list-style:none;
        color:#9d9d9e;
        font-size:14px;
        line-height: 24px;
        font-weight: 400;
        position:relative;
        min-width:100px;
        width:33.3%;

        ${mediaQueries("sm")`  
            font-size: 12px;
        `}

        &:after{
            content: '';
            background: var(--white);
            width: 50%;
            height: 1px;
            top: 16px;
            right: -25%;
            position: absolute;
        }

        &:last-child:after{
            display:none;
        }
    }
    &.parentPart .imgBox .overlayText.stepBar ul li .roundShape{
        width: 32px;
        height: 32px;
        background: transparent;
        margin: 0 auto 5px;
        border-radius: 50%;
        position:relative;
        border:1px solid var(--white);
        
        &:before{
            content: '';
            background: var(--red);
            width: 12px;
            height: 12px;
            border-radius: 50%;
            left: 50%;
            top:50%;
            position: absolute;
            transform: translate(-50%,-50%);
        }

        &.active {
            background: var(--white);
        }
        &.stepCheck{
            background: var(--white) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.52 16.18'%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath d='M3.52,6.94,6.24,9.66,15.77.13a.44.44,0,0,1,.75.31V5.79a.44.44,0,0,1-.13.31l-9.95,10a.43.43,0,0,1-.62,0L.12,10.15a.44.44,0,0,1,0-.63L2.91,6.93A.44.44,0,0,1,3.52,6.94Z' style='fill:red'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") no-repeat center center;
            background-size: 60%;

            &:before{
                display:none;
            }
        }
    }
    &.parentPart .imgBox .overlayText.stepBar ul li strong{
        display:block;
        color:var(--white);
        font-size:20px;
        font-weight: 600;
        margin-bottom:5px;

        ${mediaQueries("sm")`  
            font-size: 16px;
            margin-bottom:0px;
        `}
    }
    &.parentPart .dymamicPart{
        max-width: 476px;
        width: 100%;
        text-align: center;
        padding: 0px 50px;
        position:relative;

        ${mediaQueries("tabletLandscape")`  
            margin: 0 auto;
            padding: 30px;
        `}
        ${mediaQueries("sm")`  
            padding: 30px 15px;
        `}
    }   

    .dymamicPart h2{
        color: var(--dark-blue);
        font-size: 36px;
        line-height: 40px;
        font-weight: 600;
        margin: 15px 0;
        padding: 0;

        ${mediaQueries("md")`  
            font-size: 30px;
        `}
        ${mediaQueries("sm")`  
            font-size: 24px;
        `}

        br{
            ${mediaQueries("sm")`  
                display:none;
            `}
        }
    }
    .dymamicPart p{
        color: var(--gray);
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        margin: 0px 0px 20px;
        padding: 0;
    }
    .dymamicPart .outlineSocailBtn{
        margin:0px 0px 20px 0px;
    }
    
    .dymamicPart .subHeading{
        color: var(--gray);
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        margin: 0px 0px 20px;
        padding: 0 0 0 25px;
    }
    .addItem{
        position: absolute;
        right: 0;
    }
    .addItem img{
        margin:0px;
        width: 16px;
        height: 16px;
        transition:all 0.3s;
    }
    .addItem:hover img{
        transform:scale(1.2);
    }
`;

