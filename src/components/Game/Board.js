import React from 'react';
import PropTypes from 'prop-types';
import BoardPosition from './BoardPosition';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  height: 100%;
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
      selectPosition={props.selectPosition}
    />
  ));

  return (
    <div style={{ width: '100%', height: '20rem', display: 'block' }}>
      <Ul>
        {board}
      </Ul>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  selectPosition: PropTypes.func.isRequired
};

export default Board;
