import React from 'react';
import PropTypes from 'prop-types';
import Btn from '../Btn';
import { FormattedMessage } from 'react-intl';
import Icon from 'react-icons/lib/fa/play';

class NewGameBtn extends React.PureComponent {

  handleClick = (e) => {
    this.props.newGame(null);
  }

  render() {
    return (
      <Btn onClick={this.handleClick}>
        <Icon />
        <FormattedMessage id="newGame" />
      </Btn>
    );
  }
}

NewGameBtn.propTypes = {
  newGame: PropTypes.func.isRequired
};

export default NewGameBtn;
