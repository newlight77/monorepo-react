import * as React from 'react';
import { joyTheme } from '../system/theme';

const style: any = {
    margin: 0,
    backgroundColor: joyTheme.palette.background.backdrop,
    color: joyTheme.palette.primary.plainColor,
};

interface Props extends React.PropsWithChildren {
    sx?: any,
    children?: string | string[] | React.ReactElement | React.ReactElement[]
}

export const Code: React.FC<Props> = ({ children }: Props) => {
    return (
        <code style={style}>{children}</code>
    );
}

