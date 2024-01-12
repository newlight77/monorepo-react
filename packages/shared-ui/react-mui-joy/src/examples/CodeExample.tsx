import React from "react";
import { css } from '@emotion/react';
import { Box, Theme } from "@mui/joy";
import { Code, CodeBlock } from "../atoms";

const style: any = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    margin: 2.5rem 0rem;
    background-color: ${theme.vars.palette.background.body};
`;

const contentStyle: any = (theme: Theme) => css`
    padding: 4;
    max-width: 600;
`

export const CodeExample: React.FC = () => {
    return (
        <Box sx={style}>
            <h1>Code Examples</h1>

            <Box sx={contentStyle}>
                Example of code:
                <Code>
                    {"export type Score = 0 | 1 | 2 | 3 | 4 | 5;"}
                </Code>
            </Box>

            <Box sx={contentStyle}>
                Example of code block:

                <CodeBlock>
                    {"import * as React from 'react';"}
                </CodeBlock>
            </Box>
        </Box>
    )
};

