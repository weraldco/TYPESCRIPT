"use strict";
// type User = {
// 	id: number;
// 	username: string;
// 	role: 'member' | 'contributor' | 'admin';
// };
// type UpdateUser = Partial<User>;
// const users: User[] = [
// 	{ id: 1, username: 'werald_co', role: 'member' },
// 	{ id: 2, username: 'winwin_mo', role: 'admin' },
// 	{ id: 3, username: 'saphe_vm', role: 'contributor' },
// 	{ id: 4, username: 'vasty_of', role: 'member' },
// ];
// function addNewUser(newUser: Omit<User, 'id'>): User {
// 	const user: User = { id: users[users.length - 1].id + 1, ...newUser };
// 	users.push(user);
// 	return user;
// }
// function updateUser(id: number, updateDetail: UpdateUser) {
// 	const currentUser = users.find((user) => user.id === id);
// 	if (!currentUser) {
// 		console.error('User not found');
// 		return;
// 	}
// 	return Object.assign(currentUser, updateDetail);
// }
// addNewUser({ username: 'zean_ob', role: 'member' });
// console.log(users);
// updateUser(1, { role: 'admin' });
// console.log(users);
// console.log('Debugging..');
// // type Person = {
// // 	name: string;
// // 	age: number;
// // 	isStudent: boolean;
// // };
// // let person1: Person = {
// // 	name: 'Werald',
// // 	age: 34,
// // 	isStudent: true,
// // };
// // let person2: Person = {
// // 	name: 'Winwin',
// // 	age: 4,
// // 	isStudent: false,
// // };
// // let myName = 'Bob';
// // const myName2: 'Bob' = 'Bob';
// // // Union
// // type User = {
// // 	username: string;
// // 	role: 'guest' | 'member' | 'admin';
// // };
// // type UserRolse = 'guest' | 'member' | 'admin';
// // let userRole: UserRolse = 'admin';
// // let student: User = { username: 'werald', role: 'admin' };
// // console.log(student.role);
//# sourceMappingURL=index.js.map