import styled from 'styled-components';

const Btn = styled.button`
  font-family: ${props => props.theme.a.fontFamily};
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0.2rem;
  font-size: ${props => props.theme.scale(1)};
  border: none;

  padding-top: ${props => props.theme.scale(-1)};
  padding-left: ${props => props.theme.scale(0)};
  padding-bottom: ${props => props.theme.scale(0)};
  padding-right: ${props => props.theme.scale(0)};

  margin-top: ${props => props.theme.scale(-1)};
  margin-left: 0;
  margin-bottom: ${props => props.theme.scale(0)};
  margin-right: ${props => props.theme.scale(0)};

  &:hover {
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.black};
      transition: 0.3s;
  }

  span {
    padding-left: ${props => props.theme.scale(-4)};
  }
`;

export default Btn;
