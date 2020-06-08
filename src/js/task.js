export default function destr(obj) {
	const result = [];
	const { special } = obj;
	for (let i = 0; i < special.length; i++) {
		const {
			id, name, icon, description = 'Описание недоступно',
		} = special[i];
		result.push({
			id, name, icon, description,
		});
	}


	return result;
}
