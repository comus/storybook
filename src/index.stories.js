import React from 'react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';
import NextLink from 'next/link'

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <NextLink href='/test' passHref>
    <a onClick={action('button-click')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </a>
  </NextLink>
);
