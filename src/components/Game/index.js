import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moveAi, newGame, selectPosition } from '../../redux/actions';
import NewGameBtn from './NewGameBtn';
import styled from 'styled-components';
import Canvas from './Canvas';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;

  width: 100%;
  max-width: 20rem;

  text-align: center;
`;

class Game extends React.PureComponent {

  render() {
    const { game, selectPosition } = this.props;

    return (
      <Section>
        <Canvas
          game={game}
          selectPosition={selectPosition}
        />
        <div>
          <NewGameBtn newGame={this.props.newGame} />
        </div>
      </Section>
    );
  }
};

Game.propTypes = {
  game: PropTypes.object.isRequired,
  selectPosition: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    game: state.game
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newGame: type => {
      dispatch(newGame(type));
    },
    moveAi: type => {
      dispatch(moveAi(type));
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
