import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { User } from '@/interfaces/users';
const UserContext = createContext<{
	users: User[];
	setUsers: (users: User[]) => void;
}>({
	users: [],
	setUsers: () => {}
});

function UserProvider({ children }: { children: React.ReactNode }) {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get('/api/users');
				setUsers(response.data.users);
			} catch (err) {
				console.error('Error fetching tasks:', err);
			}
		};

		fetchUsers();
	}, []);

	return (
		<UserContext.Provider value={{ users: users, setUsers: setUsers }}>
			{children}
		</UserContext.Provider>
	);
}
function useUserContext() {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUserContext must be used within a UserProvider');
	}
	return context;
}
export { UserProvider, useUserContext };
