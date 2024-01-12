import * as React from 'react';
import { css } from '@emotion/react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import { Info } from '@mui/icons-material';
import { DarkModeToggle } from '../atoms/DarkModeToggle';

const style: any = css`
    display: flex;
    // backdrop-filter: blur(15px);
    // -webkit-backdrop-filter: blur(15px);
    // background: rgba(0,0,0,.3);
    // border-radius: 3rem;
    bottom: 1rem;
    left: 50%;
    // padding: 0.7rem 1.7rem;
    position: fixed;
    // -webkit-transform: translateX(-50%);
    // transform: translateX(-50%);
    // width: max-content;
    z-index: 100;

    &:hover {
        background: background.level1;
        -webkit-transform: translateX(1rem) translateY(-0.2rem) scale(1.1, 1.1);
        transform: translateX(1rem) translateY(-0.2rem) scale(1.1, 1.1);
        transition: ease-in-out 0.25s allow-discrete;
    }
`

const styleMenu: any = css`
    display: flex;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 1rem;
    gap: 1.2rem;
    padding: 0.4rem 0.5rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
`

const styleButton: any = css`
    background: transparent;
    border: 0.1rem solid transparent;
    border-radius: 0.8rem;
    font-size: 1rem;
    padding: 0.9rem;
    display: flex;
    transition: var(--transition);
    // margin-inline-start: auto;
`

export const NavBar: React.FC = () => {

    const [activeNav, setActiveNav] = React.useState('#');

    return (
        <Box component="nav" about='navbar' aria-label="navbar" sx={style}>
            <List role="menubar" orientation="horizontal" sx={styleMenu}>
                <ListItem role="none">
                    <ListItemButton sx={styleButton}
                        role="menuitem"
                        component="a"
                        href="#home"
                        aria-label="Home"
                        onClick={() => setActiveNav('#Home')}
                        color='primary'
                        variant={activeNav === '#experience' ? 'outlined' : 'soft'}
                    >
                        <Home />
                    </ListItemButton>
                </ListItem>
                <ListItem role="none">
                    <ListItemButton sx={styleButton}
                        role="menuitem"
                        component="a"
                        href="#about"
                        onClick={() => setActiveNav('#About')}
                        color='primary'
                        variant={activeNav === '#experience' ? 'solid' : 'soft'}
                        >
                        <Info></Info>
                    </ListItemButton>
                </ListItem>
                <ListItem role="none">
                    <ListItemButton sx={styleButton}
                        role="menuitem"
                        component="a"
                        href="#auth"
                        aria-label="auth"
                        onClick={() => setActiveNav('#Auth')}
                        color='primary'
                        variant={activeNav === '#experience' ? 'outlined' : 'soft'}
                    >
                        <Person />
                    </ListItemButton>
                </ListItem>
                <ListItem role="none"
                    color='primary'
                    variant='plain'
                >
                    <DarkModeToggle />
                </ListItem>
            </List>
        </Box>
    );
}