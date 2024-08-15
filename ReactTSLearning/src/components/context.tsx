import { createContext, useState } from 'react';

interface GlobalProviderProps {
	children: React.ReactNode;
}

interface UserProps {
	name: string;
	age: number;
	isMarried: boolean;
}

interface GlobalContextProps {
	users: UserProps[] | null;
	addUser: (user: UserProps) => void;
	updateUser: (id: string) => void;
	deleteUser: (id: string) => void;
}

const ContextInitialValues = {
	users: null,
	addUser: () => null,
	updateUser: () => null,
	deleteUser: () => null,
};
export const GlobalContext =
	createContext<GlobalContextProps>(ContextInitialValues);

export default function GlobalProvider({ children }: GlobalProviderProps) {
	const [users, setUsers] = useState<UserProps[] | null>(null);
	const addUser = (user: UserProps) => null;
	const updateUser = (id: string) => null;
	const deleteUser = (id: string) => null;
	return (
		<>
			<GlobalContext.Provider
				value={{ users, addUser, updateUser, deleteUser }}
			>
				{children}
			</GlobalContext.Provider>
		</>
	);
}
