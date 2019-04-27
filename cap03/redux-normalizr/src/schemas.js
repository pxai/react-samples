import { Schema, arrayOf } from "normalizr";

const projectSchema = Schema("projects");
const membersSchema = Schema("members");
const employeeSchema = Schema("empleoyee");

// A project has an array of members:
projectSchema.define({
	members: arrayOf(membersSchema)
});

membersSchema.define({
	employee: employeeSchema
});


export { projectSchema, membersSchema, productSchema };
