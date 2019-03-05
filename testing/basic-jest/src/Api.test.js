import Api from './Api';

test('Api class instantiates', () => {
    const api = new Api();
});

test('Default data is empty', () => {
    const api = new Api();

    expect(api.findAll()).toEqual([]);
});

test('Data passed to constructor returns with list', () => {
    const api = new Api([{id: 1, task: "Work"}]);

    expect(api.findAll()).toEqual([{id: 1, task: "Work"}]);
});

test('Find by id returns expected record', () => {
    const api = new Api([{id: 1, task: "Work"}]);

    expect(api.findById(1)).toEqual({id: 1, task: "Work"});
});

test('Adds element correctly', () => {
    const api = new Api();
    api.add({id: 1, task: "Work"});

    expect(api.findAll()).toEqual([{id: 1, task: "Work"}]);
});

test('Adds element correctly with existing data', () => {
    const api = new Api([{id: 1, task: "Work"}]);
    api.add({id: 2, task: "Sleep"});

    expect(api.findAll()).toEqual([
        {id: 1, task: "Work"},
        {id: 2, task: "Sleep"}
    ]);
});

test('Removes element correctly', () => {
    const api = new Api();
    api.add({id: 1, task: "Work"});

    expect(api.findAll().length).toEqual(1);

    api.remove(1);

    expect(api.findAll().length).toEqual(0);
});

test('Does not remove when id not present', () => {
    const api = new Api();
    api.add({id: 1, task: "Work"});

    expect(api.findAll().length).toEqual(1);

    api.remove(0);

    expect(api.findAll().length).toEqual(1);
});

test("Updates the element correctly", () => {
  const api = new Api([{id: 4, task: "Nap"}]);

  api.update(4, {id: 4, task: "Work"}});

  expect(api.findAll()).toEqual({id: 4, task: "Work"});
});
