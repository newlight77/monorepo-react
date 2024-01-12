import * as React from 'react';
import { css } from '@emotion/react';
import { useColorScheme } from '@mui/joy/styles';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { Box } from '@mui/joy';


const style: any = css`
    float: right;
    z-index: 100;
    
    background: transparent;
    display: flex;
    align-items: right;
    margin: 0.5rem 0.5rem 0rem 0rem;
    padding-right: 0.1rem;
`

const styleButton: any = css`
    font-size: 2rem;
    text-items: right;
    gap: 4px;
`

export const DarkModeToggle: React.FC<IconButtonProps> = ({ onClick, ...other }) => {

    const { mode, setMode } = useColorScheme();
    const [ mounted, setMounted ] = React.useState(false);
    
    React.useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) {
        return <IconButton size="sm" variant="outlined" color="neutral" disabled />;
    }

    const handleOnClick = (event: any) => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
        onClick?.(event);
    }

    return (
        <Box about='dark-mode-toggle' sx={style}>
            <IconButton sx={styleButton}
                id="toggle-mode"
                size="sm"
                variant="plain"
                color="primary"
                aria-label="toggle light/dark mode"
                onClick={handleOnClick}
                {...other}
            >
                {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
            </IconButton>
        </Box>

    );
}