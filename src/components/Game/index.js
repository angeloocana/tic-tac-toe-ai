import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import { connect } from 'react-redux';
import { newGame, onClick } from '../../redux/actions';

class Game extends React.PureComponent {

  render() {
    const { board, onClick } = this.props;

    return (
      <Board
        board={board}
        onClick={onClick}
      />
    );
  }
};

Game.propTypes = {
  board: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    board: state.board
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newGame: type => {
      dispatch(newGame(type));
    },
    onClick: index => {
      dispatch(onClick(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
