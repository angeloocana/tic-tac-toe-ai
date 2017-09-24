import React from 'react';
import theme from '../../../themes/theme';
import raf from 'raf';

const drawLines = (ctx) => {
  const conf = {
    lineColor: theme.colors.white,
    lineWidth: 3
  };

  // let nFrames = 0;

  const _drawLines = () => {
    // nFrames += 1;

    console.log('hey');
    ctx.strokeStyle = conf.lineColor;
    ctx.lineWidth = conf.lineWidth;
    ctx.beginPath();

    const { clientWidth, clientHeight } = ctx.canvas;
    const columnWidth = clientWidth / 3;

    ctx.moveTo(columnWidth, 0);
    ctx.lineTo(columnWidth, clientHeight);

    ctx.moveTo(columnWidth * 2, clientHeight);
    ctx.lineTo(columnWidth * 2, 0);

    ctx.moveTo(0, columnWidth);
    ctx.lineTo(clientHeight, columnWidth);

    ctx.moveTo(clientHeight, columnWidth * 2);
    ctx.lineTo(0, columnWidth * 2);

    ctx.stroke();

    // raf(_drawLines);
  };

  raf(_drawLines);
};

class CanvasTest extends React.PureComponent {

  componentDidMount() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    drawLines(ctx);
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

export default CanvasTest;
