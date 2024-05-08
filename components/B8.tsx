import React, { Component } from "react";

interface State {    
    titleInput: string;
}

export default class B8 extends Component<any, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      titleInput: "",
    };
  }
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      titleInput: e.target.value,
    });
  };
  componentDidUpdate() {
    document.title = this.state.titleInput;
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.titleInput}
          onChange={this.handleInputChange}
          placeholder="Nhập tiêu đề"
        />
      </>
    );
  }
}