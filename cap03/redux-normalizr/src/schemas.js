import { schema } from "normalizr";

const project = new schema.Entity ("projects");
const members = new schema.Entity ("members");
const employee = new schema.Entity ("empleoyee");
const department = new schema.Entity ("department");

project.define ({
	members: [members]
});

members.define ({
	employee: employee
});

employee.define ({
	department: department
});

export { project, members, employee, department };
