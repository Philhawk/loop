import React, { Component } from 'react';

export default class Unauthorized extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>YOU ARE UNAUTHORIZED!</h1>
      </div>
    );
  }
}
