import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import { connect } from 'react-redux';
import { newGame, selectPosition } from '../../redux/actions';
import NewGameBtn from './NewGameBtn';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

class Game extends React.PureComponent {

  render() {
    const { board, selectPosition } = this.props;

    return (
      <Section>
        <NewGameBtn newGame={this.props.newGame} />
        <Board
          board={board}
          selectPosition={selectPosition}
        />
      </Section>
    );
  }
};

Game.propTypes = {
  board: PropTypes.array.isRequired,
  selectPosition: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired
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
    selectPosition: index => {
      dispatch(selectPosition(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
