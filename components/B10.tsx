import React, { Component } from 'react';

interface State {
    count: number;
}

export default class Counter extends Component<{}, State> {
    intervalId: any;

    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                count: (prevState.count + 1) % 11 
            }));
        }, 1000);
    }

    componentWillUnmount() {
            clearInterval(this.intervalId);
    }

    render() {
        const { count } = this.state;

        return (
            <>
                <h2>Counter App</h2>
                <p>Count: {count}</p>
            </>
        );
    }
}

