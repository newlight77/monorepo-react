import React, { useState } from 'react';
import { css } from '@emotion/react';
import { zxcvbn } from "zxcvbn-typescript";
import Input from '@mui/joy/Input';
import { ProgressBar, Score } from '../atoms/ProgressBar';
import { Box, IconButton, Typography } from '@mui/joy';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const pwStyle: any = css`
    display: flex;
    gap: 4;
`

const pwInputStyle: any = css`
    display: flex;
    width: 100%;
    padding: 0rem;
`

const pwShowOrHideButtonStyle: any = css`
    flex: 3;
    margin-left: 0.4rem;
    align-items: right;
`

const progressBarLabelStyle: any = (score: Score) => css`
    display: flex;
    width: 100%;
    padding: 0.3rem 0;
    color: hsl(${score*20 -10} 80% 45%);
`

const pwStrStrengthStyle: any = (score: Score) => css`
    text-align: center;
    width: 100%;
    // padding: 10px 0;
    color: hsl(${score*20 -10} 80% 30%);
    font-size: 0.6rem;
    font-weight: bold;
    transition: all 300ms ease-in-out;
`

const strengthVariants = ['Very weak', 'Very weak', 'Weak', 'Strong', 'Strong', 'Very strong'];

type P = (P: ShowHide) => void;
type T = (T: string) => void;
type S = (s: Score) => void;
type ShowHide = 'show' | 'hide';

type Props = {
    onChange: (e: any) => void;
    children: React.ReactElement
};

const handleOnPwChange = (event: any, setScore: S, setShowOrHide: P) => {
    if (event.target.value === "") {
        setScore(0);
        setShowOrHide('hide');
    } else {
        const pwScore = zxcvbn(event.target.value);
        setScore((pwScore.score + 1) as Score)
        setShowOrHide('show');
    }
}

const handlerOnPwMask = (showOrHide: string, setShowOrHide: P, setPwInputType: T) => {
    setShowOrHide(showOrHide === "show" ? "hide" : "show");
    setPwInputType(showOrHide === "show" ? "input" : "password");
}


export const PasswordInput: React.FC<Props> = ({onChange, children}: Props) => {

    const [score, setScore] = useState(0 as Score);
    const [pwInputType, setPwInputType] = useState('password');
    const [showOrHide, setShowOrHide] = useState('show' as ShowHide);

    const onPwChange = (event: any) => {
        event.preventDefault();
        handleOnPwChange(event, setScore, setShowOrHide);
        onChange(event);
    }

    const onPwMask = (event: any) => {
        event.preventDefault();
        handlerOnPwMask(showOrHide, setShowOrHide, setPwInputType);
    }

    const visibilityIcon = (showOrHide: ShowHide) => {
        return showOrHide === 'hide' ? <VisibilityOff/> : <Visibility />
    }

    return (
        <div>
            <Box about='password' sx={pwStyle}>
                <Input
                    about='password input'
                    sx={pwInputStyle}
                    type={pwInputType}
                    name="password"
                    onChange={onPwChange}
                    startDecorator={
                        <IconButton about='visibility button'
                            sx={pwShowOrHideButtonStyle}
                            size='sm'
                            variant="plain"
                            color="neutral"
                            onClick={onPwMask}
                        >
                            {visibilityIcon(showOrHide)}
                        </IconButton>
                    }
                />
            </Box>
            <ProgressBar score={score} colorType={'multicolor'} height='sm'></ProgressBar>
            {/* <LinearProgress
                determinate
                size="sm"
                value={score * 20}
                sx={progressBarStyle(score)}
            /> */}
            <Box about='progress bar label' sx={progressBarLabelStyle(score)}>
                <Typography
                    level="body-xs"
                    sx={pwStrStrengthStyle(score)}
                >
                    {strengthVariants[score]}
                </Typography>
            </Box>
        </div> 
    );

}