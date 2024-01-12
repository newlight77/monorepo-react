import React from "react";
// import { css } from '@emotion/react';
import { Button } from "@mui/joy";

// const style: any = css`
//     float: right;
//     z-index: 100;

//     background: transparent;
//     display: flex;
//     align-items: right;
//     margin: 0.5rem 0rem 0rem 0rem;
//     padding-right: 0.1rem;
// `

// const styleButton: any = css`
//     font-size: 2rem;
//     text-items: right;
//     gap: 4px;
// `

type Variant = 'soft' | 'plain' |  'outlined' | 'solid';
type Color = 'neutral' | 'primary' |  'warning' | 'success' | 'danger';
type Size = 'sm' | 'md' |  'lg';

type Props = {
    onClick: (e: any) => void,
    variant?: Variant,
    color?: Color,
    size? : Size
    icon?: React.ReactElement,
    sx?: any,
    children?: string | string[] | React.ReactElement | React.ReactElement[]
}

export const IconButton: React.FC<Props> = ({ variant, color, size, onClick, icon, sx, children }) => {
    return (
        <Button
            sx={sx}
            variant={variant}
            color={color}
            size={size}
            fullWidth
            startDecorator={icon}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}