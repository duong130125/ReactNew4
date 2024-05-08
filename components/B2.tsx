import React, { Component } from 'react'

export default class B2 extends Component {
    componentWillMount(): void {
        console.log("Component đã được mount!");
    }
  render() {
    return (
      <>
      <h2>B2</h2>
      </>
    )
  }
}
