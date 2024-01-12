import * as React from 'react';
import { css } from '@emotion/react';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import { Box } from '@mui/joy';
import { Logout } from '@mui/icons-material';

const style: any = css`
    float: right;
    z-index: 100;

    background: transparent;
    display: flex;
    align-items: right;
    margin: 0.5rem 0rem 0rem 0rem;
    padding-right: 0.1rem;
`

const styleButton: any = css`
    font-size: 2rem;
    text-items: right;
    gap: 4px;
`

export const LogoutButton: React.FC<IconButtonProps> = ({ color, size, variant, onClick, ...other }) => {

    return (
        <Box about='logout button' sx={style}>
            <IconButton sx={styleButton}
                id="logout-button"
                size={size ||"sm"}
                variant={variant ||"plain"}
                color={color || "primary"}
                aria-label="logout button"
                onClick={onClick}
                {...other}
            >
                <Logout/>
            </IconButton>
        </Box>

    );
}