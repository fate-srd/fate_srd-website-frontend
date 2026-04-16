import { DrupalClient } from 'next-drupal';
import { getEnv, validateEnv } from './env';

validateEnv();

export const drupal = new DrupalClient(
  getEnv('NEXT_PUBLIC_DRUPAL_BASE_URL', 'https://fatesrd.amazingrando.dev'),
  {
    previewSecret: getEnv('DRUPAL_PREVIEW_SECRET'),
  },
);
