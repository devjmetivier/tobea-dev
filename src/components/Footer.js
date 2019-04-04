import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: ${props => props.theme.width};
  max-width: ${props => props.theme.maxWidth};
`;

export default Footer;
