import React, { Component } from 'react'

interface User {
    userName:string
}
export default class B1 extends Component<any, User> {
    constructor(props: User) {
        super(props);
        this.state = {
          userName: 'Dương' 
        };
      }
      componentWillMount(): void {
        this.setState({
          userName: 'Nguyễn Đình Dương'
        })
      }
  render() {
    return (
      <>
      <h1>Tôi là {this.state.userName}</h1>
      </>
    )
  }
}
