import { createStitches } from '@stitches/react';

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            white: '#FFF',
            black: '#000000',
            gray100: '#F2F2F2',
            gray200: '#868686',
        },
        fontSizes: {
            sm:'1rem',
            md:'1.5rem',
            lg:'2rem',
        },
        fontWeights: {
            regular:300,
            medium:400,
            bold:500,
        }
    }
});