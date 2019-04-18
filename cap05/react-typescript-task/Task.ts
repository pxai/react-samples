class Task {
    private _id: number;
    private _name: string;

    public constructor (name: string = "") {
        this._id = Math.round(1000 * Math.random());
        this._name = name;
    }

    public get id (): number {
        return this._id;
    }

    public get name (): string {
        return this._name;
    }

    public set name (name: string) {
        this._name = name;
    }
}

export default Task;