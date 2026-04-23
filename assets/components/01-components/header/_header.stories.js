import React from 'react';

import template from './_header.twig';
import logo from '../../../images/logo.svg';
import patreonLogo from '../../../images/patreon-bar-logo.png';

import './header';
import '../patreon-bar/patreon-bar';

/**
 * Storybook Definition.
 */
const meta = { title: 'Regions/Site Header' };
export default meta;

export const SiteHeader = () => (
  <div dangerouslySetInnerHTML={{ __html: template({ logo, patreonLogo }) }} />
);
