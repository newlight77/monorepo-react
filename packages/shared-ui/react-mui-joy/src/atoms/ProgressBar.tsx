import React from 'react';

const heightVariants = {
    'sm': '4px',
    'md': '6px',
    'lg': '9px',
};

export type ColorType = 'unicolor' | 'multicolor';
export type Score = 0 | 1 | 2 | 3 | 4 | 5;
export type HeightVariant = keyof typeof heightVariants;

type Props = {
    score: Score,
    colorType: ColorType,
    colors?: string[],
    color?: string,
    height?: HeightVariant,
    style?: any,
}

const defaultStyle = {};
const defaultHeight = 'sm';
const defaultColor = 'green';
const defaultColors = ['', 'red', 'orange', 'yellow', '#5cff47', 'green'];
const progress = ['0%', '20%', '40%', '60%', '80%', '100%'];

export const ProgressBar: React.FC<Props> = ({ score, colorType, colors, color, height, style }: Props) => {

    const getColor = (type: ColorType, colorArray?: string[]) => {
        switch (type) {
            case 'unicolor': return color ?? defaultColor;
            case 'multicolor': return colorArray ? colorArray[score] : defaultColors[score];
            default: return defaultColors[score];
        }
    }

    const progressBarStyle = {
        backgroundColor: getColor(colorType, colors),
        height: heightVariants[height ?? defaultHeight],
        width: progress[score],
        transition: 'all 300ms ease-in-out'
    }

    return (
        <div style={style ?? defaultStyle}>
            <div style={progressBarStyle} />
        </div>
    );

}