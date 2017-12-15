import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';

export default class IosAlertInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props.initialValue || ''
    };
  }
  static propTypes = {
    type: PropTypes.oneOf([
      'text', 'password',
      'date', 'datetime-local', 'time', 'month',
      'email', 'number', 'tel', 'url'
    ]),
    initialValue: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string
  };
  static defaultProps = {
    type: 'text',
    initialValue: ''
  };
  onChange = (e) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render () {
    return (
      <div className={this.props.className}>
        <input
          className="AlertInput__self"
          {...removeObjectKeys(this.props, ['className', 'initialValue', 'onChange'])}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}