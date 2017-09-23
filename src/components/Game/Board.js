import React from 'react';
import PropTypes from 'prop-types';
import {
  xValue,
  oValue
} from '../../ai/constants';
import {
  map
} from 'ramda';
import styled from 'styled-components';

const getValue = (value) => {
  switch (value) {
    case xValue: return 'X';
    case oValue: return 'X';
    default: return ' ';
  }
};

const Li = styled.li`
  width: 32%;
  height: 32%;

  &:nth-child(1), &:nth-child(2), &:nth-child(4), &:nth-child(5){
    border-right: 0.1rem solid ${({theme}) => theme.colors.white};
    border-bottom: 0.1rem solid ${({theme}) => theme.colors.white};
  }

  &:nth-child(3), &:nth-child(6){
    border-bottom: 0.1rem solid ${({theme}) => theme.colors.white};
  }

  &:nth-child(7), &:nth-child(8){
    border-right: 0.1rem solid ${({theme}) => theme.colors.white};
  }
`;

const BoardPosition = ({ value }) => {
  return (
    <Li>
      {getValue(value)}
    </Li>
  );
};

BoardPosition.propTypes = {
  value: PropTypes.number.isRequired
};

const Wrapper = styled.ul`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  height: 20rem;
  max-width: 20rem;
  max-height: 20rem;
  margin: auto;
  justify-content: center;
`;

const mapBoard = map(value => (<BoardPosition value={value} />));

const Board = (props) => {
  const board = mapBoard(props.board);

  return (
    <Wrapper>
      {board}
    </Wrapper>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired
};

export default Board;
