import { useContext } from 'react';
import { GlobalContext } from './context';

type UserProps = {
	name: string;
	age: number;
	isMarried: boolean;
};

export default function User(props: UserProps) {
	const { users, addUser, updateUser, deleteUser } = useContext(GlobalContext);
	return (
		<>
			<div>
				<p>Name: {props.name}</p>
				<p>Age: {props.age}</p>
				<p> This person {props.isMarried ? 'is Married' : 'is Single'}</p>
			</div>
		</>
	);
}
