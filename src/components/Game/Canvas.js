import React from 'react';
import PropTypes from 'prop-types';
import raf from 'raf';
import gameTheme from '../../canvas/gameTheme';
import drawGame from '../../canvas/drawGame';
import getSquareIndex from '../../canvas/getSquareIndex';
import styled from 'styled-components';

const Canvas = styled.canvas`
  backgroundColor: ${({ theme }) => theme.colors.black},
  maxWidth: 100%;
`;

/**
 * Get click position inside canvas
 * @param {*} canvas html canvas element
 * @param {*} event click event
 * @return {{x: Number, y: Number}} Position
 */
const getClickPosition = (canvas, event) => ({
  x: event.pageX - canvas.offsetLeft,
  y: event.pageY - canvas.offsetTop
});

class CanvasContainer extends React.PureComponent {

  getCanvas() {
    return document.getElementById('myCanvas');
  }

  draw = () => {
    var canvas = this.getCanvas();
    var ctx = canvas.getContext('2d');

    canvas.addEventListener('click', this.handleClicks, false);

    drawGame(gameTheme, ctx, raf)(this.props.game);
  }

  componentDidUpdate() {
    this.draw();
  }

  componentDidMount() {
    if (!this.didMountOnce) {
      this.didMountOnce = true;
      this.draw();
    }
  }

  handleClicks = (event) => {
    const canvas = this.getCanvas();
    const position = getClickPosition(canvas, event);

    const index = getSquareIndex(canvas, position);

    if (index >= 0) {
      this.props.selectPosition(index);
    }
  }

  render() {
    return (
      <div>
        <Canvas
          id="myCanvas"
          width="200"
          height="200"
        />
      </div>);
  }
}

CanvasContainer.propTypes = {
  game: PropTypes.object.isRequired,
  selectPosition: PropTypes.func.isRequired
};

export default CanvasContainer;
