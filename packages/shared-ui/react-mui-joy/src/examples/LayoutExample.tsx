import * as React from 'react';
import { Layout } from '../organisms';
import { LogoutButton, ProfileButton } from '../atoms';


export const LayoutExample: React.FC = () => {
    return (
        <div>
            <Layout 
                profile={<ProfileButton onClick={() => {}}/>}
                logout={<LogoutButton/>}>
                <div>
                    empty content
                </div>
            </Layout>
        </div>
    );
}
