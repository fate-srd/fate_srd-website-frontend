import React from 'react';

import data from './_3-type';

/**
 * Storybook Definition.
 */
const meta = { title: 'Tokens/Type' };
export default meta;

export const Type = () => <div dangerouslySetInnerHTML={{ __html: data }} />;
