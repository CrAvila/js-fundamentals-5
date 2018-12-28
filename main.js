const log = (content) => console.log(content);


let user = {
    name: 'John',
    age: 30,
};

log(`${user.name} is ${user.age} years old`);

delete user.age;

log(user)

