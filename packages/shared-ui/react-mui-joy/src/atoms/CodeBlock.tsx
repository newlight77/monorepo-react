import * as React from 'react';
import { Box, Theme } from "@mui/joy";
import { css } from '@emotion/react';


const style: any = (theme: Theme) => css`
    display: flex;
    justify-content: start;
    padding: 0.5rem 0.5rem;
    margin: 0rem 0rem;
    border-radius: 0 0 2px 2px;
    border: solid 1px ${theme.vars.palette.primary.outlinedBorder};
    background-color: ${theme.vars.palette.background.level1};
    color: ${theme.vars.palette.primary.plainColor};
`;

interface Props extends React.PropsWithChildren {
    sx?: any,
    children?: string | string[] | React.ReactElement | React.ReactElement[]
}

export const CodeBlock: React.FC<Props> = ({ children }: Props) => {
    return (
        <Box sx={style}>
            <pre>
                <code>{children}</code>
            </pre>
        </Box>
    );
}

