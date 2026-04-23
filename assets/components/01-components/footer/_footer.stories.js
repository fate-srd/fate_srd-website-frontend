import React from 'react';

import template from './_footer.twig';
import logo from '../../../images/logo.svg';
import patreon from '../../../images/become_a_patron_button@2x.png';

/**
 * Storybook Definition.
 */
const meta = { title: 'Regions/Site Footer' };
export default meta;

export const SiteFooter = () => (
  <div dangerouslySetInnerHTML={{ __html: template({ logo, patreon }) }} />
);
