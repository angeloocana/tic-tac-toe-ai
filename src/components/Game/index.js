import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moveAi, newGame, selectPosition } from '../../redux/actions';
import NewGameBtn from './NewGameBtn';
import styled from 'styled-components';
import Canvas from './Canvas';
import AiIcon from 'react-icons/lib/md/phone-android';
import UserIcon from 'react-icons/lib/md/person';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;

  width: 100%;
  max-width: 20rem;

  text-align: center;
`;

const Score = styled.div`
  padding-bottom: 1rem;

  svg {
    font-size: ${({ theme }) => theme.scale(1)};
  }
  
  span, svg {
    vertical-align: middle;
    display: inline-block;
  }

  .points {
    font-size: ${({ theme }) => theme.scale(3)};
    font-weight: bold;    
    padding: 0 ${({ theme }) => theme.scale(-4)};
    top: 0.1rem;
    position: relative;
  }
`;

class Game extends React.PureComponent {

  render() {
    const { game, selectPosition } = this.props;

    return (
      <Section>
        <Score>
          <UserIcon />
          <span className="points">{game.score.human}</span>
          <span>x</span>
          <span className="points">{game.score.ai}</span>
          <AiIcon />
        </Score>
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
