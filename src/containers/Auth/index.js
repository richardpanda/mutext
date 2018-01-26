import { parse } from 'querystring';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { receiveAuth } from '../../actions';

class Auth extends Component {
  componentDidMount() {
    const { dispatch, history, location } = this.props;
    const params = parse(location.hash.substring(1));
    dispatch(receiveAuth(params));
    history.replace('/s');
  }

  render() {
    return <div />;
  }
}

export default connect()(Auth);
