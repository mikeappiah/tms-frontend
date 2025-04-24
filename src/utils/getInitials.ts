export default function getInitials(name: string) {
	const initials = name
		.split(' ')
		.slice(0, 2)
		.map((part) => part[0])
		.join('');

	return initials;
}
