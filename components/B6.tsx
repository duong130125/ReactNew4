import React, { Component } from "react";

interface Props {
  massage: string;
  check: boolean
}

export default class B5 extends Component<any, Props> {
    constructor (props: Props) {
        super(props)
        this.state = {
            massage: 'Interface rendering',
            check: true
        }
    }
    handleClick = () =>{
        this.setState({
            massage: 'INTERFACE RENDERING'
        })
    }
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<Props>, nextContext: any): boolean {
        return false
    }
    render() {
        return (
        <>
            <h3>Massage: {this.state.massage}</h3>
            <button onClick={this.handleClick}>Change props</button>
        </>
        );
    }
}