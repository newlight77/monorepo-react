import * as React from 'react';
import { css } from '@emotion/react';
import Box from '@mui/joy/Box';
import { Footer, Header, NavBar } from '../molecules';

interface Props extends React.PropsWithChildren {
    profile?: string | string[] | React.ReactElement | React.ReactElement[],
    logout?: string | string[] | React.ReactElement | React.ReactElement[],
    children?: string | string[] | React.ReactElement | React.ReactElement[],
}

const style: any = css`
    // width: clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw);
    // transition: width var(--Transition-duration);
    // transition-delay: calc(var(--Transition-duration) + 0.1s);
    // position: relative;
    // z-index: 1;
    // display: block;
    // justify-content: flex-end;
    // backdrop-filter: blur(12px);
    // background-color: rgba(255 255 255 / 0.2);
    align-items: center;
`;

export const Layout: React.FC<Props> = ({profile, logout, children}: Props) => {
    return (
        <Box about='layout'>
            <Header
                profile={profile}
                logout={logout} >
                The best opportunities happen here!
            </Header>
            <NavBar></NavBar>
            <Box about='main' sx={(theme: any) => (
                {
                    ...style,
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundColor: 'rgba(19 19 24 / 0.4)',
                    }
                }
            )}>
                {children}
            </Box>
            <Footer>
                © Created by {'' + new Date().getFullYear()} - @ 2023
            </Footer>
        </Box>
    );
}
