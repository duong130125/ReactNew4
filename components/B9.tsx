import React, { Component } from "react";

interface State {
  time: Date;
}

export default class B9 extends Component<any, State> {
    currentTime: any;
    constructor(props: State) {
        super(props);
        this.state = {
            time: new Date(),
        };
    }
    componentDidMount(): void {
        this.currentTime = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
            clearInterval(this.currentTime);
    }
    tick() {
        this.setState({ 
            time: new Date() 
        });
    }
    render() {
        return (
        <>
            <p>Thời gian hiện tại: {this.state.time.toLocaleTimeString()}</p>
        </>
        );
    }
}