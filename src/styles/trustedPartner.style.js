import { mediaQueries, mediaQueriesmin } from "../styles/mediaQuery.js";
import styled, { css } from "styled-components";

export const trustedPartner = styled.div`
    &.trustedPartner{
        background:var(--white);
        padding:35px 0px;
        color:var(--gray);
        font-size:14px;
    }
    .partnerGrid {
        display: flex;
        grid-row-gap: 0px;
        max-width: 635px;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
        text-align: center;

        ${mediaQueries("sm")` 
            max-width: 100%;
            display: block;
        `}
    }
    .lableText {
        ${mediaQueries("sm")`
            margin-bottom: 15px;
        `}
    }
    .partnerGrid img {
        ${mediaQueries("sm")`
            max-width: 50%;
            margin: 0 15px;
        `}
        
    }
`;