import React from 'react';
import PropTypes from 'prop-types';
import {
  xValue,
  oValue
} from '../../ai/constants';
import styled from 'styled-components';
import XIcon from 'react-icons/lib/fa/close';
import OIcon from 'react-icons/lib/fa/circle-o';

const getValue = (value) => {
  switch (value) {
    case xValue: return <XIcon />;
    case oValue: return <OIcon />;
    default: return ' ';
  }
};

const Li = styled.li`
  cursor: pointer;
  width: 32%;
  height: 32%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:nth-child(1), &:nth-child(2), &:nth-child(4), &:nth-child(5){
    border-right: 0.1rem solid ${({ theme }) => theme.colors.white};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white};
  }

  &:nth-child(3), &:nth-child(6){
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white};
  }

  &:nth-child(7), &:nth-child(8){
    border-right: 0.1rem solid ${({ theme }) => theme.colors.white};
  }

  svg {
    font-size: ${({ theme }) => theme.scale(9)};
    margin: 1rem;
  }
`;

class BoardPosition extends React.PureComponent {

  onClick = (e) => {
    this.props.selectPosition(this.props.index);
  }

  render() {
    const { value } = this.props;

    return (
      <Li onClick={this.onClick}>
        {getValue(value)}
      </Li>
    );
  }
}

BoardPosition.propTypes = {
  value: PropTypes.number.isRequired,
  selectPosition: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default BoardPosition;
