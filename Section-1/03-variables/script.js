// ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let name = 'john';
let age = 30;

let newName = name;
newName = 'jess';

let person = {
  name: 'brad',
  age: 20,
};

console.log(name, newName);

let newPerson = person;

newPerson.name = 'bradex';

console.log(person, newPerson);
