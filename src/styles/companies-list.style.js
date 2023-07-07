import { mediaQueries, mediaQueriesmin } from "../styles/mediaQuery.js";
import styled, { css } from "styled-components";

export const companiesListing = styled.div`
    overflow: hidden;
    
    .container.bottomShape{
        position: relative;

        :before{
            content:'';
            position: absolute;
            width:158px;
            height:125px;
            background: url(/images/image-icon.svg) no-repeat center center;
            left: -124px;
            bottom: -44px;

            ${mediaQueries("desktop")`  
                left: 0px;
            `}
            ${mediaQueries("sm")`  
                display:none;
            `}
        }
        :after{
            content:'';
            position: absolute;
            width:135px;
            height:118px;
            background: url(/images/books-icon.svg) no-repeat center center;
            right: -105px;
            bottom: -44px;

            ${mediaQueries("desktop")`  
                right: 0px;
            `}
            ${mediaQueries("sm")`  
                display:none;
            `}
        }
    }
    &.companiesListing{
        background: var(--white);
        padding:100px 0px;

        ${mediaQueries("tabletLandscape")`  
            padding:80px 0px;
        `}
        ${mediaQueries("sm")`  
            padding:50px 0px;
        `}
    }
    .topText{
        margin: 0px 0px 70px;
        position:relative;

        ${mediaQueries("tabletLandscape")`  
            margin: 0px 0px 50px;
        `}
        ${mediaQueries("sm")`  
            margin: 0px 0px 30px;
        `}

        :before{
            content:'';
            position: absolute;
            width:118px;
            height:128px;
            background: url(/images/calendar-icon.svg) no-repeat center center;
            left: -90px;
            top: -40px;

            ${mediaQueries("desktop")`  
                left: 10px;
                top:0px;
            `}
            ${mediaQueries("sm")`  
                display:none;
            `}
        }
        :after{
            content:'';
            position: absolute;
            width:160px;
            height:160px;
            background: url(/images/round-clock-icon.svg) no-repeat center center;
            right: -45px;
            top: 0px;

            ${mediaQueries("desktop")`  
                right: 0px;
            `}
            ${mediaQueries("tabletLandscape")`  
                right: 10px;
                width:130px;
                height:130px;
            `}
            ${mediaQueries("sm")`  
                display:none;
            `}
        }
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
    .topText h2 br{
        ${mediaQueries("sm")`  
            display:none;
        `}
    }
    .topText p{
        margin: 0px 0px 0px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color:var(--gray);
    }
    .jobItem{
        position: relative;
        margin-bottom: 70px;
        padding:0px;
        background:var(--white);
        text-align:center;
        transition: 0.6s ease;
        -moz-transition: all 0.6s ease;
        -webkit-transition: all 0.6s ease;
        z-index: 1;

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
    .jobItem .imageBox {
        position: relative;
        height: 284px;
        overflow: hidden;
        
    }
    .jobItem .imageBox img {
        height: 284px;
        -o-object-fit: cover;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        object-position: center center;
        width: 100%;
        transition: 0.6s ease;
        -moz-transition: all 0.6s ease;
        -webkit-transition: all 0.6s ease;
    }
    .jobItem:hover .imageBox img{
        transform:scale(1.3);
    }
    .jobSortInfo{
        border: 1px solid #595959;
        border-top:0px;
        padding:18px;
        background:var(--white);
    }
    .jobItem:hover .jobSortInfo{
        border: 1px solid var(--red);
        border-top:0px;
    }
    .jobSortInfo h3{
        margin-bottom: 4px;
        font-size: 24px;
        text-transform: uppercase;

        a{
            font-weight: 500;
            color:var(--dark-blue);
        }

        ${mediaQueries("sm")`  
            font-size: 20px;
        `}
    }
    .jobItem:hover .jobSortInfo h3 a{
        color:var(--red);
    }
    .jobSortInfo span{
        display: block;
        color: var(--gray);
        font-size:14px;
        position: relative;
    }
    .jobSortInfo .location{      
        :before{
            content:'';
            background: url(/images/location-mark-icon.svg) no-repeat center center;
            width: 12px;
            height: 22px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
        }
    }
    .jobSortInfo .openJobs{
        padding:10px 0px 0px 0px;
        margin:5px 0px 0px 0px;
        color:var(--red);

        :before{
            content:'';
            width:30px;
            height:1px;
            background: var(--gray);
            left:50%;
            top:0px;
            transform:translateX(-50%);
            position: absolute;
        }
    }
`;