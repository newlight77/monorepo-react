import * as React from 'react';
import { css } from '@emotion/react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import { joyTheme } from './theme';
import { DarkModeToggle } from '../atoms';


const globalStyle = css`
    :root: {
        --Collapsed-breakpoint: 769px; // form will stretch when viewport is below 769px
        --Cover-width: 50vw; // must be vw only
        --Form-maxWidth: 800px;
        --Transition-duration: 0.25s; // set to none to disable transition
    }

    html {
        color: ${joyTheme.palette.neutral};
        background-color: ${joyTheme.palette.background.backdrop};
        box-sizing: border-box;
        letter-spacing: 0.035em;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &[data-fonts='loaded'] {
            letter-spacing: 0;
        }
    }

    * {
        margin: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        background-repeat: no-repeat;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    button {
        line-height: inherit;
        font-family: inherit;
    }

    .smooth {
        &,
        body {
            scroll-behavior: smooth;
        }
    }

    img,
    svg {
        vertical-align: bottom;
    }

    a {
        color: currentColor;
    }

    abbr[title] {
        border: 0;
        text-decoration: none;
    }

    sup {
        text-transform: none;
    }

    iframe {
        display: block;
        border: 0;
        width: 100%;
    }

    :focus {
        outline: 1px dotted;
        outline-offset: 1px;

        &:not(:focus-visible) {
            outline: none;
        }
    }
`

const rootContainerStyle = {
    // width: 'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
    // transition: 'width var(--Transition-duration)',
    // transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
    // position: 'relative',
    // zIndex: 1,
    // display: 'block',
    // // justifyContent: 'flex-end',
    // backdropFilter: 'blur(12px)',
    // backgroundColor: 'rgba(255 255 255 / 0.2)'
};

interface Props extends React.PropsWithChildren {
    children?: string | string[] | React.ReactElement | React.ReactElement[],
}

export const JoyThemeWrapper: React.FC<Props> = ({children}: Props) => {
    return (
        <CssVarsProvider defaultMode="dark" disableTransitionOnChange theme={joyTheme}>
            <CssBaseline />
            <GlobalStyles
                styles={globalStyle}
            />
            <Box about='root-container' sx={(theme: any) => (
                {
                    ...rootContainerStyle,
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundColor: 'rgba(19 19 24 / 0.4)',
                    }
                }
            )}>
                <DarkModeToggle></DarkModeToggle>
                {children}
            </Box>
        </CssVarsProvider>
    );
}
