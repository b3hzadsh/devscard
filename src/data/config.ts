import type { Config } from '@/types/data';
import faIR from 'date-fns/esm/locale/fa-IR';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: faIR,
    dateFormat: 'yyyy MMMM',
    translations: {
      now: 'همین حالا',
    },
  },
  meta: {
    title: 'B3hzadsh - INTJ Guy',
    description: 'Like the sun,I rise again',
    faviconPath: '/src/assets/my-image.jpg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
