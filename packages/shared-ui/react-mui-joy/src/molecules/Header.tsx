import * as React from 'react';
import { css } from '@emotion/react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { Home } from '@mui/icons-material';


const style: any = css`
    display: flex;
    align-items: left;
    justify-content: space-between;
    margin: 0rem 0rem 0rem 0rem;
    gap: 1rem;
`;

const styleHome: any = css`
    background: transparent;
    display: flex;
    margin: 0.5rem;
    padding-left: 0.1rem;
    gap: 0.5rem;
`;

const styleButton: any = css`
    gap: 0.5rem;
    font-size: 2rem;
`

const styleNav: any = css`
    gap: 0.5;
    display: flex;
    align-items: center;
`;

const styleAuth: any = css`
    gap: 0.5;
    display: flex;
`;

interface Props extends React.PropsWithChildren {
    profile?: string | string[] | React.ReactElement | React.ReactElement[],
    logout?: string | string[] | React.ReactElement | React.ReactElement[],
    children?: string | string[] | React.ReactElement | React.ReactElement[],
}

export const Header: React.FC<Props> = ({profile, logout, children}: Props) => {

    const handleOnClick = (event: any) => {
        console.log('//TODO');
    }

    return (
        <Box component="header" about='header' sx={style}>
            <Box about='home' sx={styleHome}>
                <IconButton sx={styleButton}
                    id="home-button"
                    component="a"
                    href="#home"
                    color="primary"
                    variant="plain"
                    size="sm"
                    aria-label="home"
                    onClick={handleOnClick}
                >
                    <Home />
                </IconButton>
                <IconButton sx={styleButton}
                    id="about"
                    // component="a"
                    href="#about"
                    color="primary"
                    variant="plain"
                    size="sm"
                    aria-label="about"
                    onClick={handleOnClick}
                >
                    <Typography level="title-lg">About</Typography>
                </IconButton>
            </Box>
            <Box about='nav' sx={styleNav}>
                {children}
            </Box>
            <Box sx={styleAuth}>
                <Box about='profile'>
                    {profile}
                </Box>
                <Box about='logout'>
                    {logout}
                </Box>
            </Box>
        </Box>
    );
}
