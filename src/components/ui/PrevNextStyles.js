import styled from 'styled-components';

const PrevNextWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0.5rem;
  @media (max-width: ${props => props.theme.breakToFullScreen}) {
    flex-flow: column nowrap;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Button = styled.div`
  width: calc(50% - 15px);

  @media (max-width: ${props => props.theme.breakToFullScreen}) {
    width: 100%;
  }

  & > a {
    display: inline-block;
    padding: 5px 12px;
    width: 100%;
    border-radius: 3px;
    background: ${props => props.theme.palette.brightGray};
    color: ${props => props.theme.palette.white};
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.palette.white};
    }
    span {
      display: block;
      text-align: center;
    }
    @media (max-width: ${props => props.theme.breakToFullScreen}) {
      width: 100%;
    }
  }
`;

const Prev = styled(Button)``;

const Next = styled(Button)``;

export { PrevNextWrapper, Spacer, Button, Prev, Next };
