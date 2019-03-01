import Api from './Api';

test('Api class instantiates', () => {
    const api = new Api(); 
});

test('Default data is empty', () => {
    const api = new Api();

    expect(api.list()).toEqual({});
});

test('Data passed to constructor returrns with list', () => {
    const api = new Api({id: 1, task: "Work"});

    expect(api.list()).toEqual({id: 1, task: "Work"});
});