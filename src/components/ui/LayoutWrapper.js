import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: ${props => props.theme.wrap};
  min-height: 100vh;
`;

export default LayoutWrapper;
