const log = (content) => console.log(content);


let user = {
    name: 'John',
    age: 30,
    "likes birds": true,
};

log(`${user.name} is ${user.age} years old`);

user.isAdmin = true;
delete user.age;

log(user)
log(user['likes birds']);

delete user['likes birds'];

log(user);

let key = 'single';

user[key] = true;

log(user);

user['age'] = 30;

let data = 'age';

log(user[data]);

//Computed properties

let fruit = 'oranges';

let bag = {
    [fruit]: 5,
};

log(`The bag has ${bag['oranges']} ${fruit}.`);

const makeUser = (name,age) => {
    return {
        name: name,
        age: age,
    }
}

const user1 = makeUser('Carlos',17);

const shorthandValue = (name,age) => {
    return {
        name,
        age,
    }
}

const user2 = shorthandValue('Claudia',15);

log(user1);
log(user2);





