export const users = [
  {
    name: "Alice",
    age: 25,
    location: "New York",
    email: "alice@example.com",
  },
  {
    name: "Bob",
    age: 30,
    location: "San Francisco",
    email: "bob@example.com",
  },
  {
    name: "Charlie",
    age: 22,
    location: "Chicago",
    email: "charlie@example.com",
  },
];

export function findUserByName(name: string) {
  return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
}

export function addUser(newUser: { name: string, age: number, location: string, email: string }) {
  users.push(newUser);
}

export function removeUser(user:any) {
  if (user.target.classList.contains(`remove-user`)) {
    user.target.parentElement.remove();
  }
}