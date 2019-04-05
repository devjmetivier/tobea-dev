import styled from 'styled-components';

const Tag = styled.small`
  & > a {
    padding: 2px 4px;
    text-decoration: none;
    border-radius: 2px;
    background: ${props => props.theme.colors.brightGray};
    box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
    color: ${props => props.theme.colors.white};
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.colors.white};
    }
  }
`;

export default Tag;
