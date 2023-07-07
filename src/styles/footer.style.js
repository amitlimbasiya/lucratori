import { mediaQueries, mediaQueriesmin } from "../styles/mediaQuery.js";
import styled, { css } from "styled-components";

export const footer = styled.div`
    &.footer{
        background: var(--dark-blue);
        padding:50px 0px;

        ${mediaQueries("md")`
            padding: 40px 0px;
        `}
    }
    .ftLinks a{
        padding:2px 0px;
        margin:0px 32px;
        font-weight:600;
        font-size:16px;
        line-height:18px;
        color:var(--white);
        border-bottom:1px solid transparent;

        &:hover{
            border-bottom:1px solid var(--white);
        }
        ${mediaQueries("tabletPortrait")`  
            margin:0px 10px;
        `}
        ${mediaQueries("md")`  
            margin:0px 0px 0px 15px;
        `}
    }
    .ftSocial{
        font-size: 14px;
        color:#999999;
    }
    .ftSocial a{
        padding:8.5px 10px;
        margin:0px 0px 0px 15px;
        border:2px solid var(--white);
        display: inline-block;
        border-radius: 10px;

        ${mediaQueries("tabletPortrait")`  
            padding: 5.5px 9px;
            margin: 0px 0px 0px 10px;
        `}

        & svg{
            fill:var(--white);
            width: 18px;
            height: 18px;

            ${mediaQueries("tabletPortrait")`  
                width: 13px;
                height: 13px;
            `}
        }
        &:hover{
            background: var(--white);
            
            & svg{
                fill:var(--dark-blue);
            }
        }
    }
`;
export const copyPart = styled.div`
    &.copyPart{
        background: #dedede;
        padding:15px 0px;
    }
    
    p{
        font-size: 14px;
        margin: 0px;
        color: #999999;
        font-weight: 500;
        line-height: 1;
        display: inline-block;
    }
    a{
        font-size: 14px;
        margin: 0px 0px 0px 15px;
        color: #999999;
        font-weight: 500;
        line-height: 1;     
        display:inline-block;       

        &:hover{
            color:var(--black);
        }

        ${mediaQueries("md")`  
            margin:0px 5px;
        `}
    }
`;
