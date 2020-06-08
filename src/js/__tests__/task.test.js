import destr from '../task';

test('get destructuring', () => {
	const expected = [
		{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон',
		},
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...',
			description: 'Описание недоступно',
		},
	];
	const result = destr({
		name: 'Лучник',
		type: 'Bowman',
		health: 50,
		level: 3,
		attack: 40,
		defence: 10,
		special: [
			{
				id: 8,
				name: 'Двойной выстрел',
				icon: 'http://...',
				description: 'Двойной выстрел наносит двойной урон',
			},
			{
				id: 9,
				name: 'Нокаутирующий удар',
				icon: 'http://...',
			},
		],
	});

	expect(result).toEqual(expected);
});
