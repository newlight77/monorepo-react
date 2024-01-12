import * as React from 'react';
import { css } from '@emotion/react';
import Box from '@mui/joy/Box';


// const lightBackgroundImage = 'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)';
const darkBackgroundImage = 'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)';

const style: any = css`
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -100;
    // left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))';
    // transition:
    //     'background-image var(--Transition-duration), left var(--Transition-duration) !important';
    // transition-delay: 'calc(var(--Transition-duration) + 0.1s)';
    background-color: background.level1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: lightBackgroundImage;
`;

interface Props extends React.PropsWithChildren {
    children?: string | string[] | React.ReactElement | React.ReactElement[]
}

export const Background: React.FC<Props> = ({children}: Props) => {
    return (
        <Box component="footer"
            sx={(theme: any) => (
                {
                    ...style,
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundImage: darkBackgroundImage,
                    }
                }
            )}
        >
            {children}
        </Box>
    );
}
