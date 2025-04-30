function formatDate(dateString: Date) {
	const date = new Date(dateString);

	const day = date.getUTCDate();
	const month = date.toLocaleString('en-US', {
		month: 'long',
		timeZone: 'UTC'
	});
	const year = date.getUTCFullYear();

	const getOrdinal = (n: number) => {
		const s = ['th', 'st', 'nd', 'rd'],
			v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	};

	return `${getOrdinal(day)} ${month}, ${year}`;
}

export default formatDate;
