import Api from "./Api";

test("Api class instantiates", () => {
    const api = new Api();
});

test("Default data is empty", () => {
    const api = new Api();

    expect(api.findAll()).toEqual([]);
});

test("Data passed to constructor returns with list", () => {
    const api = new Api([{id: 1, name: "Work"}]);

    expect(api.findAll()).toEqual([{id: 1, name: "Work"}]);
});

test("Find by id returns expected record", () => {
    const api = new Api([{id: 1, name: "Work"}]);

    expect(api.findById(1)).toEqual({id: 1, name: "Work"});
});

test("Adds element correctly", () => {
    const api = new Api();
    api.add({name: "Work"});

    expect(api.findAll()[0]).toMatchObject({ name: "Work"});
});

test("Adds element correctly with existing data", () => {
    const api = new Api([{id: 1, name: "Work"}]);
    api.add({name: "Sleep"});

    expect(api.findAll()).toMatchObject([
        {name: "Work"},
        {name: "Sleep"}
    ]);
});

test("Removes element correctly", () => {
    const api = new Api();
    api.add({name: "Work"});
    const tasks = api.findAll();

    expect(tasks.length).toEqual(1);

    api.remove(tasks[0].id );

    expect(api.findAll().length).toEqual(0);
});

test("Does not remove when id not present", () => {
    const api = new Api();
    api.add("Work");

    expect(api.findAll().length).toEqual(1);

    api.remove(0);

    expect(api.findAll().length).toEqual(1);
});

test("Updates the element correctly", () => {
    const api = new Api([{id: 4, name: "Nap"}]);

    api.update({id: 4, name: "Work"});

    expect(api.findById(4)).toMatchObject({id: 4, name: "Work"});
});
