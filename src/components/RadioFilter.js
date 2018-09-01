import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'optical',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="sensor"
            name="sensor"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="optical" control={<Radio />} label="Optical" />
            <FormControlLabel value="laser" control={<Radio />} label="Laser" />
          </RadioGroup>
        </FormControl>
        <p>this.state.value {this.state.value}</p>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default RadioButtonsGroup;