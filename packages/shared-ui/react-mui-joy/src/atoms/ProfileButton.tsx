import * as React from 'react';
import { css } from '@emotion/react';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import { Box } from '@mui/joy';
import { Person } from '@mui/icons-material';

const style: any = css`
    float: right;
    z-index: 100;

    background: transparent;
    display: flex;
    align-items: right;
    margin: 0.5rem 0rem 0rem 0rem;
    padding-right: 0.1rem;
`;

const styleButton: any = css`
    font-size: 2rem;
    text-items: right;
    gap: 4px;
`

export const ProfileButton: React.FC<IconButtonProps> = ({ color, size, variant, onClick, ...other }) => {

    return (
        <Box about='profile button' sx={style}>
            <IconButton sx={styleButton}
                id="profile-button"
                size={size ||"sm"}
                variant={variant ||"plain"}
                color={color || "primary"}
                aria-label="profile button"
                onClick={onClick}
                {...other}
            >
                <Person/>
            </IconButton>
        </Box>

    );
}