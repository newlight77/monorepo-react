import * as React from 'react';
import { Layout } from '@/react-mui-joy/organisms';
import { JoyThemeWrapper } from '@/react-mui-joy/system';
import { CodeExample } from '@/react-mui-joy/examples/CodeExample';
import { ReactCodeBlockExample } from './code-block/ReactCodeBlockExample';


export const JoyLibExample: React.FC = () => {
    return (
        <div>
            <JoyThemeWrapper>
                <Layout>
                    <CodeExample></CodeExample>
                    <ReactCodeBlockExample></ReactCodeBlockExample>
                </Layout>
            </JoyThemeWrapper>
        </div>
    );
}
