"use strict";
const users = [
    { id: 1, username: 'werald_co', role: 'member' },
    { id: 2, username: 'winwin_mo', role: 'admin' },
    { id: 3, username: 'saphe_vm', role: 'contributor' },
    { id: 4, username: 'vasty_of', role: 'member' },
];
function addNewUser(newUser) {
    newUser.id = users[users.length - 1].id + 1;
    users.push(newUser);
}
function updateUser(id) { }
console.log(users);
// type Person = {
// 	name: string;
// 	age: number;
// 	isStudent: boolean;
// };
// let person1: Person = {
// 	name: 'Werald',
// 	age: 34,
// 	isStudent: true,
// };
// let person2: Person = {
// 	name: 'Winwin',
// 	age: 4,
// 	isStudent: false,
// };
// let myName = 'Bob';
// const myName2: 'Bob' = 'Bob';
// // Union
// type User = {
// 	username: string;
// 	role: 'guest' | 'member' | 'admin';
// };
// type UserRolse = 'guest' | 'member' | 'admin';
// let userRole: UserRolse = 'admin';
// let student: User = { username: 'werald', role: 'admin' };
// console.log(student.role);
//# sourceMappingURL=test.js.map