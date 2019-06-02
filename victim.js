{ entities:
{ department:
{ '1': { id: 1, name: 'Programming' },
	'2': { id: 2, name: 'Systems Engineering' } },
	empleoyee:
	{ '1': { id: 1, name: 'Richard', department: 1 },
		'15': { id: 15, name: 'Gilfoyle', department: 2 } },
	members:
	{ '333': { id: 333, days: 356, employee: 1 },
		'666': { id: 666, days: 350, employee: 15 } },
	projects: { '42': { id: 42, members: [ 333, 666, [length]: 2 ] } } },
	result: 42 }
