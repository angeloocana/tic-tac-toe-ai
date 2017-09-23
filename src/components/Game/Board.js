import React from 'react';
import PropTypes from 'prop-types';
import BoardPosition from './BoardPosition';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  height: 20rem;
  max-width: 20rem;
  max-height: 20rem;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.scale(4)};
  margin-left: auto;
  margin-right: auto;
  justify-content: center;  
`;

const Board = (props) => {
  const board = props.board.map((value, index) => (    
    <BoardPosition
      key={index}
      index={index}
      value={value}
      onClick={props.onClick}
    />
  ));

  return (
    <Wrapper>
      {board}
    </Wrapper>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;
