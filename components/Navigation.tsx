import { styled } from '../stitches.config';

export const Navigation = styled('nav', {
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: 'minmax(auto, max-content)',
  gap: '1.5rem',
});
