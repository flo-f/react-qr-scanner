import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

export default class QrScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result'
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div className='qr-scanner-container'>
        <p>
          <small>Last Result:</small><br />
          {this.state.result}
        </p>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={this.props.style}
        />
      </div>
    );
  }
}
