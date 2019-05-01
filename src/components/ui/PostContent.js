import styled from 'styled-components';

const PostContent = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    &:hover [aria-label*='permalink'] {
      visibility: visible;
      opacity: 1;
    }
  }

  [aria-label*='permalink'] {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 4px;
    position: absolute;
    top: 0;
    right: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
  }
`;

export default PostContent;
