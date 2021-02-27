import { styled } from '../stitches.config';

export const Heading = styled('h1', {
  margin: '.5rem 0 1rem 0',
  fontFamily: '$mono',
  fontWeight: '$bold',
  fontSize: '2rem',
  color: '$loContrast',

  variants: {
    size: {
      h1: { fontSize: '2rem' },
      h2: { fontSize: '1.5rem' },
      h3: { fontSize: '1.25rem' },
      h4: { fontSize: '1rem' },
      h5: { fontSize: '0.8rem' },
      h6: { fontSize: '0.675rem' },
    },
  },
});
