import { styled } from '../stitches.config';

export const Anchor = styled('a', {
  fontFamily: '$mono',
  fontWeight: '$normal',
  fontSize: '$1',
  color: '$blue500',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
  ':visited': {
    color: '$purple500',
  },
});
