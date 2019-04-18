import * as React from 'react';
import Task from "./Task";

interface FormProps {
    task?: Task
    onUpdate: (task) => void
}

interface FormState {
    name: string
}

class Form extends React.Component<FormProps, FormState> {
    public constructor (props: FormProps) {
        super(props);

        this.state =  { name: props.task ? props.task.name : "" };
    }

    public render (): React.ReactNode {
        return <div className="Form">
            <div><label>Task</label></div>
            <div>
                <input type="text" onChange={this.updateTask.bind(this)} value={this.state.name} />
            </div>
            <div>
                <input type="button" value="Save" onClick={this.save.bind(this)} />
            </div>
        </div>;
    }

    private updateTask (event) {
        this.setState({ name: event.target.value });
    }

    private save () {
        if (this.state.name.trim() !== "") {
            this.props.onUpdate({name: this.state.name});
            this.setState({name: ""});
        }
    }
}

export default Form;