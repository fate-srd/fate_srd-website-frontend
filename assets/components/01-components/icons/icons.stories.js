import React from 'react';

import iconTwig from './icons.twig';

import iconData from './icons.yml';

/**
 * Storybook Definition.
 */
const meta = { title: 'Tokens/Icons' };
export default meta;

export const icons = () => (
  <div dangerouslySetInnerHTML={{ __html: iconTwig(iconData) }} />
);
