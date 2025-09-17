import React from 'react';

import colors from './_1-colors.twig';

import colorsData from './_1-colors.yml';

/**
 * Storybook Definition.
 */
const ColorsStory = { title: 'Tokens/Colors' };
export default ColorsStory;

export const Palettes = () => (
  <div dangerouslySetInnerHTML={{ __html: colors(colorsData) }} />
);
