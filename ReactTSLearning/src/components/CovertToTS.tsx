import React, { useState } from 'react';

interface User {
	name: string | null;
	email: string | null;
}
interface UserProfileProps {
	user: User[];
	onUpdate: (user: User) => void;
}

function UserProfileEditor({ user, onUpdate }: UserProfileProps) {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		onUpdate({
			...user,
			name: name,
			email: email,
		});
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="">Name:</label>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default UserProfileEditor;
