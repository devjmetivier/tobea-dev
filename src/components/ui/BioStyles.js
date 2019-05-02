import styled from 'styled-components';

const BioStyles = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 1rem 0;

  & > div {
    margin-left: 1rem;
  }

  p {
    margin: 0;
  }
`;

export default BioStyles;
