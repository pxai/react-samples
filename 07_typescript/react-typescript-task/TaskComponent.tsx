import * as React from 'react';
import Task from "./Task";
import Form from "./Form";

interface TaskComponentProps {
    task: Task 
    onUpdate: (task: Task) => void
    onRemove: (id: number) => void
}

interface TaskComponentState {
    showForm: boolean
}

class TaskComponent extends React.Component<TaskComponentProps, TaskComponentState> {
    public constructor (props: TaskComponentProps) {
        super(props);

        this.state = { showForm: false };
    }

    public render (): React.ReactNode {
        return <div className="Task">
            <div className="Task-data">
                {this.props.task.id} - {this.props.task.name}
            </div>
            <div className="Task-controls">
                <a href="javascript:void(0)"
                    onClick={this.toggleForm.bind(this)}>
                    Update
                </a> | 
                <a href="javascript:void(0)"
                    onClick={() => this.props.onRemove(this.props.task.id)}>
                    Delete
                </a>
            </div>
            {this.state.showForm && <Form task={this.props.task} onUpdate={this.update.bind(this)} />}
        </div>;
    }

    private toggleForm () {
        this.setState({ showForm: !this.state.showForm });
    }

    private update ({ name }: Task) {
        if (name !=="") {
            this.props.onUpdate({id: this.props.task.id, name } as Task);
            this.toggleForm();
        } 
    }
}

export default TaskComponent;
