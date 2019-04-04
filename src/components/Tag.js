import styled from 'styled-components';

const Tag = styled.small`
  padding: 2px 4px;
  border-radius: 2px;
  background: ${props => props.theme.light.accent};
  box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
  color: ${props => props.theme.light.bg};
`;

export default Tag;
