import React, { useState } from "react";
import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import { helloWorldSample } from "./ReactCodeBlockSample";
import { useColorScheme } from "@/react-mui-joy/system";


const style: any = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    margin: '2.5rem 0rem',
};

const codeBlockStyle: any = {
    margin: '2.5rem 0rem',
};

export const ReactCodeBlockExample: React.FC = () => {
    const { mode } = useColorScheme();
    const [language, changeLanguage] = useState("tsx");
    const [codeSample, changeCodeSample] = useState(helloWorldSample["tsx"]);
    const [lineNumbers, toggleLineNumbers] = useState(true);

    const handleLanguageChange = (e: any) => {
        const language: string = e.target.value;
        const snippet = helloWorldSample[language];
        changeCodeSample(snippet);
        return changeLanguage(e.target.value);
    }

    return (
        <div style={style}>
            <TopBar
                select={{
                    value: language,
                    onChange: handleLanguageChange,
                    options: Object.keys(helloWorldSample)
                }}
                toggle={{
                    checked: lineNumbers,
                    onChange: e => toggleLineNumbers(!lineNumbers)
                }}
            />
            <div style={codeBlockStyle}>
                <CopyBlock
                    language={language}
                    text={codeSample}
                    showLineNumbers={lineNumbers}
                    theme={mode === 'light' ? atomOneLight: atomOneDark}
                    wrapLongLines={true}
                    codeBlock
                />
            </div>
        </div>
    );
};



type SelectType = {
    value: string,
    onChange: (e: any) => void,
    options: string[],
}

type ToggleType = {
    checked: boolean,
    onChange: (e: any) => void,
}

interface Props extends React.PropsWithChildren {
    select: SelectType,
    toggle: ToggleType,
    children?: string | string[] | React.ReactElement | React.ReactElement[]
}

const topBarStyle: any = {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'center',
    margin: '1.5rem 0rem 0rem 0rem',
};

const selectStyle: any = {
    minWidth: '50%',
    padding: '0.5rem 0rem 0.5rem 0rem',
};

const lineNumberStyle: any = {
    flex: 1,
    minWidth: '20%',
    padding: '0.5rem 0rem 0.5rem 0rem',
};

const TopBar: React.FC<Props> = ({ select, toggle }) => {
    return (
        <div style={topBarStyle}>
            <div style={selectStyle}>
                <select
                    defaultValue={select.value}
                    onChange={select.onChange}
                >
                    {select.options.map(lang => 
                        (<option key={lang} value={lang}>
                            {lang}
                        </option>)
                    )}
                </select>
            </div>
            <div style={lineNumberStyle}>
                <input type='checkbox' {...toggle} />
                <label>Show Line Numbers</label>
            </div>
        </div>
    );
}