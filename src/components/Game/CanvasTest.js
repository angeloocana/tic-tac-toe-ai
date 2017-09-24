import React from 'react';
import theme from '../../themes/theme';

const drawLines = (ctx) => {
  const conf = {
    lineColor: theme.colors.white,
    lineWidth: 3
  };

  ctx.strokeStyle = conf.lineColor;
  ctx.lineWidth = conf.lineWidth;
  ctx.beginPath();

  const { clientWidth, clientHeight } = ctx.canvas;
  const columnWidth = clientWidth / 3;
  console.log('width: ', clientWidth);
  console.log('clientHeight: ', clientHeight);
  console.log('columnWidth: ', columnWidth);

  ctx.moveTo(columnWidth, 0);
  ctx.lineTo(columnWidth, clientHeight);

  ctx.moveTo(columnWidth * 2, clientHeight);
  ctx.lineTo(columnWidth * 2, 0);

  ctx.moveTo(0, columnWidth);
  ctx.lineTo(clientHeight, columnWidth);

  ctx.moveTo(clientHeight, columnWidth * 2);
  ctx.lineTo(0, columnWidth * 2);

  ctx.stroke();
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
