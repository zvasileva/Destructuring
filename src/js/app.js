// TODO: write your code here
import sum from './basic';

import destr from './task';

console.log('worked');

console.log(sum([1, 2]));

console.log(destr({
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
}));
