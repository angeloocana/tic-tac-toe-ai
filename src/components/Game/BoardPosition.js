import React from 'react';
import PropTypes from 'prop-types';
import {
  xValue,
  oValue
} from '../../ai/constants';
import styled from 'styled-components';

const getValue = (value) => {
  switch (value) {
    case xValue: return 'X';
    case oValue: return 'O';
    default: return ' ';
  }
};

const Li = styled.li`
  cursor: pointer;
  width: 32%;
  height: 32%;

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
`;

class BoardPosition extends React.PureComponent {

  onClick = (e) => {
    console.log(e);
    this.props.onClick(this.props.index);
  }

  render() {
    console.log(this.props);
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
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default BoardPosition;
