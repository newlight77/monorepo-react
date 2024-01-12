import * as React from 'react';
import Box from '@mui/joy/Box';
import { Typography } from '@mui/joy';


const style: any = {
    py: 3,
    pb: 8,
};

interface Props extends React.PropsWithChildren {
    children?: string | string[] | React.ReactElement | React.ReactElement[]
}

export const Footer: React.FC<Props> = ({children}: Props) => {
    return (
        <Box component="footer"
            sx={style}
        >
            <Typography
                sx={style}
                level="body-xs"
                textAlign="center"
            >
                {children}
            </Typography>
        </Box>
    );
}
