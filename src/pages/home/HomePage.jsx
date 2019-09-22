import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import delay from 'utils/delay';

import Loader from 'components/ui/Loader';

export default class HomePage extends Component {
  state = {
    isLoading: true,
    data: []
  };

  componentDidMount() {
    delay(1000).then(() => {
      this.setState({
        isLoading: false,
        data: []
      });
    });
  }




  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Loader size="large"/>
        ) : (
          <>
            <h1>Home page</h1>
            <div></div>
          </>
        )}
      </>
    );
  }
}