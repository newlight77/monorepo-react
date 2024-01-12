import * as React from 'react';
import { Divider as JoyDivider } from "@mui/joy";
import { css } from '@emotion/react';


// const style: any = {
//     'color':() => css`
//         xs: '#FFF',
//         md: 'text.tertiary'
//     `,
//     '--Divider-lineColor': () => css`
//         xs: '#FFF',
//         md: 'var(--joy-palette-divider)',
//     `,
// };

const style: any = css`
    'color': {
        xs: #FFF;
        md: text.tertiary;
    },
    '--Divider-lineColor': {
        xs: #FFF;
        md: var(--joy-palette-divider);
    },
`;

interface Props extends React.PropsWithChildren {
    children?: string | string[] | React.ReactElement | React.ReactElement[]
}

export const Divider: React.FC<Props> = ({ children }: Props) => {
    return (
        <JoyDivider
            sx={(theme) => ({ [theme.getColorSchemeSelector('light')]: style })}
        >
            {children}
        </JoyDivider>
    );
}

