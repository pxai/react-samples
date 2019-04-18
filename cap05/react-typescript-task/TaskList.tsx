import * as React from 'react';
import Task from "./Task";
import Form from "./Form";
import Api from "./Api";
import TaskComponent from "./TaskComponent";

interface TaskListProps {
    api: Api 
}

interface TaskListState {
    showForm: boolean
    tasks: Task[]
}

class TaskList extends React.Component<TaskListProps, TaskListState> {
    public constructor (props: TaskListProps) {
        super(props);

        this.state = { showForm: false, tasks: [] };
    }

    public render (): React.ReactNode {
        return <div>
            <h3>Tasks: { this.state.tasks.length}</h3>
            {
                this.state.tasks.map(task =>
                    <TaskComponent 
                        key={task.id} 
                        task={task} 
                        onRemove={this.remove.bind(this)} onUpdate={this.update.bind(this)} />
                )
            }
            <div><a href="javascript:void(0)" onClick={this.toggleForm.bind(this)}>Add Task</a></div>
            {this.state.showForm && <Form onUpdate={this.add.bind(this)} />}
        </div>;
    }

    private getTasks () {
        const tasks = this.props.api.findAll();
        this.setState({ tasks });
    }

    private add({ name }: Task) {
        this.props.api.add({ name } as Task);
        this.toggleForm();
        this.getTasks();
    }

    private update(task) {
        this.props.api.update(task);
        this.getTasks();
    }


    private remove(id) {
        this.props.api.remove(id);
        this.getTasks();
    }

    private toggleForm() {
        this.setState({ showForm: !this.state.showForm });
    }
}

export default TaskList;
