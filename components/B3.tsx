import React, { Component } from 'react';

interface State {
    company: string;
    check: boolean;
}

export default class B3 extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            company: 'Rikkei Academy',
            check: true
        };
    }

    handleUpdate = () => {
        this.setState({
            check: !this.state.check
        });
    };

    componentDidUpdate(prevProps: any, prevState: State) {
        if (prevState.check !== this.state.check) {
            this.setState({
                company: this.state.check ? 'Rikkei Academy' : 'RikkeiSoft'
            });
        }
    }

    render() {
        return (
            <>
              <h2>Company: {this.state.company}</h2>
              <button onClick={this.handleUpdate}>Change state</button>
            </>
        );
    }
}
