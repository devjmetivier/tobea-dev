import { styled } from '../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  margin: '0 auto',
  padding: '2rem 1rem',
  maxWidth: '100%',
  bp1: { maxWidth: '640px' },
  bp2: { maxWidth: '768px' },
  bp3: { maxWidth: '1024px' },
});
