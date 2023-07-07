import { mediaQueries, mediaQueriesmin } from "./mediaQuery.js";
import styled, { css } from "styled-components";

export const MyJobsListParent = styled.div`
    &.myJobsListParent{
        background:var(--platinum);
        padding:70px 0px;

        ${mediaQueries("tabletPortrait")`
            padding:50px 0px;
        `}
    }
    
`;