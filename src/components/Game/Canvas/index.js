import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../themes/theme';
import raf from 'raf';
import { drawGame } from './drawGame';
import { getSquareIndex } from './getSquareIndex';

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

class Canvas extends React.PureComponent {

  getCanvas() {
    return document.getElementById('myCanvas');
  }

  draw = () => {
    var canvas = this.getCanvas();
    var ctx = canvas.getContext('2d');

    canvas.addEventListener('click', this.handleClicks, false);

    const linesTheme = {
      positions: {
        x: {
          lineColor: theme.colors.white,
          lineWidth: 4,
          percentageByFrame: 15,
          delayAfterEachLine: 10
        },
        o: {
          lineColor: theme.colors.white,
          lineWidth: 4,
          percentageByFrame: 5
        }
      },
      boardLines: {
        lineColor: theme.colors.white,
        lineWidth: 2,
        percentageByFrame: 10,
        delayAfterEachLine: 10
      },
      winLine: {
        lineColor: theme.colors.green,
        lineWidth: 8,
        percentageByFrame: 10,
        delayAfterEachLine: 10
      }
    };

    drawGame(linesTheme, ctx, raf)(this.props.game);
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
        <canvas
          id="myCanvas"
          width="200"
          height="200"
          style={{
            backgroundColor: theme.colors.black,
            maxWidth: '100%'
          }}
        />
      </div>);
  }
}

Canvas.propTypes = {
  game: PropTypes.object.isRequired,
  selectPosition: PropTypes.func.isRequired
};

export default Canvas;
