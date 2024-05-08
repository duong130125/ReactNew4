import React, { Component } from 'react';

interface State {
    status: string;
    check: boolean;
}

export default class B3 extends Component<any, State> {
    constructor(props: State) {
        super(props);
        this.state = {
            status: 'Open the form',
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
                status: this.state.check ? 'Open the form' : 'Close the Form'
            });
        }
    }

    render() {
        return (
            <>
                <h2>Status: "{this.state.status}"</h2>
                <button onClick={this.handleUpdate}>Change props</button>
            </>
        );
    }
}
