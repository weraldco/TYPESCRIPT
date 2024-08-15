import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/store';

export default function Login() {
	const [newUsername, setNewUsername] = useState('');
	const dispatch = useDispatch();
	const username = useSelector((state: any) => state.user.value.username);
	return (
		<div className="p5 grid place-content-center">
			<div>
				<input
					className="p-2 bg-slate-200"
					onChange={(e) => setNewUsername(e.target.value)}
					value={newUsername}
					type="text"
				/>
				<button
					className="p-2 bg-blue-500"
					onClick={() => {
						dispatch(login({ username: newUsername }));
						setNewUsername('');
					}}
				>
					Login
				</button>
			</div>
			{username && (
				<div className="text-3xl font-bold">
					Welcome back {username}
					<button className="p-2 bg-red-500" onClick={() => dispatch(logout())}>
						Logout
					</button>
				</div>
			)}
		</div>
	);
}
