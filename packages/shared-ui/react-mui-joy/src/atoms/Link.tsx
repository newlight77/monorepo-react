import React from 'react';
import JoyLink from '@mui/joy/Link';

type Props = {
  level?: any,
  href?: string;
  children?: string | string[] | React.ReactElement | React.ReactElement[]
};

export const Link: React.FC<Props> = ({ level, href, children }) => {
  return (
      <JoyLink
        level={level}
        href={href}
        target="_blank" rel="noreferrer"
        >
          {children}
      </JoyLink>
  );
};
