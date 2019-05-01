import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.theme.width};
  max-width: ${props => props.theme.maxWidth};
`;

export default FooterStyles;
