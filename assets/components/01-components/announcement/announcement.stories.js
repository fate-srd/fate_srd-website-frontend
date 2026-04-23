import React from 'react';

import template from './_announcement.twig';

/**
 * Storybook Definition.
 */
const meta = { title: 'Regions/Announcement' };
export default meta;

export const SiteFooter = () => (
  <div dangerouslySetInnerHTML={{ __html: template() }} />
);
