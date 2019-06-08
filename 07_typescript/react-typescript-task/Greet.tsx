import * as React from 'react';

interface GreetState {
    message: string
}

class Greet extends React.Component<any, GreetState> {
    public constructor(props) {
        super(props);
        this.state = {
            message: "This is a greet"
        };
    }

    private doSomething () {
        this.setState({message: "I was clicked"});
    }

    public render (): React.ReactNode {
        return <div className="Greet" onClick={() => this.doSomething()}>
		    {this.state.message}
        </div>;
    }
}

export default Greet;