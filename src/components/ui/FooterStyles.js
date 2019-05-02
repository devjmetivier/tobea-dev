import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export default FooterStyles;
