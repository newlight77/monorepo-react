import { extendTheme } from '@mui/joy/styles';


const primary = {
    50: '#F4FAFF',
    100: '#DDF1FF',
    200: '#ADDBFF',
    300: '#6FB6FF',
    400: '#3990FF',
    500: '#096BDE',
    600: '#054DA7',
    700: '#02367D',
    800: '#072859',
    900: '#00153C',
};

const info = {
    50: '#FDF7FF',
    100: '#F4EAFF',
    200: '#E1CBFF',
    300: '#C69EFF',
    400: '#A374F9',
    500: '#814DDE',
    600: '#5F35AE',
    700: '#452382',
    800: '#301761',
    900: '#1D0A42',
};


const neutral = {
    50: '#F7F7F8',
    100: '#EBEBEF',
    200: '#D8D8DF',
    300: '#B9B9C6',
    400: '#8F8FA3',
    500: '#73738C',
    600: '#5A5A72',
    700: '#434356',
    800: '#25252D',
    900: '#131318',
};

const danger = {
    50: '#FFF8F6',
    100: '#FFE9E8',
    200: '#FFC7C5',
    300: '#FF9192',
    400: '#FA5255',
    500: '#D3232F',
    600: '#A10E25',
    700: '#77061B',
    800: '#580013',
    900: '#39000D',
};

const success = {
    50: '#F3FEF5',
    100: '#D7F5DD',
    200: '#77EC95',
    300: '#4CC76E',
    400: '#2CA24D',
    500: '#1A7D36',
    600: '#0F5D26',
    700: '#034318',
    800: '#002F0F',
    900: '#001D09',
};

const warning = {
    50: '#FFF8C5',
    100: '#FAE17D',
    200: '#EAC54F',
    300: '#D4A72C',
    400: '#BF8700',
    500: '#9A6700',
    600: '#7D4E00',
    700: '#633C01',
    800: '#4D2D00',
    900: '#3B2300',
};

export const joyTheme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    ...primary,
                    plainColor: `var(--joy-palette-primary-600)`,
                    plainHoverBg: `var(--joy-palette-primary-100)`,
                    plainActiveBg: `var(--joy-palette-primary-200)`,
                    plainDisabledColor: `var(--joy-palette-primary-200)`,
                    outlinedColor: `var(--joy-palette-primary-500)`,
                    outlinedBorder: `var(--joy-palette-primary-200)`,
                    outlinedHoverBg: `var(--joy-palette-primary-100)`,
                    outlinedHoverBorder: `var(--joy-palette-primary-300)`,
                    outlinedActiveBg: `var(--joy-palette-primary-200)`,
                    outlinedDisabledColor: `var(--joy-palette-primary-100)`,
                    outlinedDisabledBorder: `var(--joy-palette-primary-100)`,
                    softColor: `var(--joy-palette-primary-600)`,
                    softBg: `var(--joy-palette-primary-100)`,
                    softHoverBg: `var(--joy-palette-primary-200)`,
                    softActiveBg: `var(--joy-palette-primary-300)`,
                    softDisabledColor: `var(--joy-palette-primary-300)`,
                    softDisabledBg: `var(--joy-palette-primary}-50)`,
                    solidColor: '#fff',
                    solidBg: `var(--joy-palette-primary-500)`,
                    solidHoverBg: `var(--joy-palette-primary-600)`,
                    solidActiveBg: `var(--joy-palette-primary-700)`,
                    solidDisabledColor: `#fff`,
                    solidDisabledBg: `var(--joy-palette-primary-200)`,
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    ...primary,
                    plainColor: `var(--joy-palette-primary-300)`,
                    plainHoverBg: `var(--joy-palette-primary-800)`,
                    plainActiveBg: `var(--joy-palette-primary-700)`,
                    plainDisabledColor: `var(--joy-palette-primary-800)`,
                    outlinedColor: `var(--joy-palette-primary-200)`,
                    outlinedBorder: `var(--joy-palette-primary-700)`,
                    outlinedHoverBg: `var(--joy-palette-primary-800)`,
                    outlinedHoverBorder: `var(--joy-palette-primary-600)`,
                    outlinedActiveBg: `var(--joy-palette-primary-900)`,
                    outlinedDisabledColor: `var(--joy-palette-primary-800)`,
                    outlinedDisabledBorder: `var(--joy-palette-primary-800)`,
                    softColor: `var(--joy-palette-primary-200)`,
                    softBg: `var(--joy-palette-primary-900)`,
                    softHoverBg: `var(--joy-palette-primary-800)`,
                    softActiveBg: `var(--joy-palette-primary-700)`,
                    softDisabledColor: `var(--joy-palette-primary-800)`,
                    softDisabledBg: `var(--joy-palette-primary-900)`,
                    solidColor: `#fff`,
                    solidBg: `var(--joy-palette-primary-600)`,
                    solidHoverBg: `var(--joy-palette-primary-700)`,
                    solidActiveBg: `var(--joy-palette-primary-800)`,
                    solidDisabledColor: `var(--joy-palette-primary-700)`,
                    solidDisabledBg: `var(--joy-palette-primary-900)`,
                },
            },
        },
    },
});
