import styled from 'styled-components';

const FloatStyles = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 8% 0;
  padding: 20px 30px;
  position: relative;
  width: ${props => props.theme.width};
  max-width: ${props => props.theme.maxWidth};
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: background 0.25s ease;

  @media (max-width: ${props => props.theme.breakToFullScreen}) {
    margin: 0;
    padding: 20px 15px;
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
  }
`;

export default FloatStyles;
