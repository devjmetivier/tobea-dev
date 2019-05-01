import styled from 'styled-components';

const PrevNextWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0.5rem;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Button = styled.div`
  & > a {
    padding: 5px 12px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    border-radius: 3px;
    background: ${props => props.theme.palette.brightGray};
    color: ${props => props.theme.palette.white};
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.palette.white};
    }
  }
`;

const Prev = styled(Button)``;

const Next = styled(Button)`
  text-align: right;
`;

export { PrevNextWrapper, Spacer, Button, Prev, Next };
