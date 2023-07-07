export const breakpoints = {
    sm: 576,
    md: 767,
    tabletPortrait: 991,
    tabletLandscape: 1200,
    desktop: 1439,
};

export const mediaQueries = (key) => (style) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;

export const mediaQueriesmin = (key) => (style) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
