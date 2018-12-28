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


//Existence Check

log(user.noSuchProperty == undefined);

log(`${'name' in user1}, ${user1['name']}` );
log(`${'age' in user2}, ${user2['age']}` );
log(`${'bla' in user2}, ${user2['bla']}` );


let user3 = makeUser('Brooke',17);
log(user3);

let key0 = 'age';

log(`${key0 in user3}, ${user3[key0]}`);

let ojb0 = {
    test:undefined,
}

log(`${'test' in ojb0}, ${ojb0['test']}`);

//The 'for...in' loop
log('')
log('The "for...in" user')
let forInUser = {
    name: 'John',
    age: 30,
    isAdmin: true,
}

for(let prop in forInUser){
    
    log(`${prop} is ${forInUser[prop]}`)
}

let codes = {
    "49":'Germany',
    "41":'Switzerland',
    "44":'Great Britain',
    "1" : "USA",
}

for(let code in codes){
    log(code);
}

log('Math trunc')
log( String(Math.trunc(Number('49'))));
log( String(Math.trunc(Number('+49'))));
log( String(Math.trunc(Number('1.2'))));


log('Order trick');

let codes1 = {
    "+49":'Germany',
    "+41":'Switzerland',
    "+44":'Great Britain',
    "+1" :'USA',
}

for(let code in codes){
    log(+code);
}

//Copying by reference
log('');
log('Copying by reference');

let user4 = {name: 'John'};

let admin = user4;

log(admin)

admin.name = 'Pete';

log(admin);
log(user4);

log(user4 == admin);
log(user4 === admin);

let a = {};
let b = {};

log(a == b);
log(a === b);

const constUser = {
    name: 'James',
};

log(constUser);

constUser.age = 25;

log(constUser);

//Cloning and Mergin
log('');
log('Cloning and Merging');


    //Method 1
let originalUser = {
    name: 'Carlos',
    age: 17,
}

let clonedUser = {};

for(let key in originalUser){
    clonedUser[key] = originalUser[key];
}

log(originalUser);
clonedUser.name = 'Pete'
log(clonedUser);


    //Method 2
    log('Method 2')

    let clone2 = Object.assign(clonedUser, originalUser);
    log(clone2);

    //Merging
    log('Merging');
    let adminUser = {
        name:'Azazel',
    };

    let permissions1 = {canView:true, isGay:false};
    let permissions2 = {canEdit:true};

    log(adminUser);

    Object.assign(adminUser, permissions1, permissions2);

    log(adminUser);

    //Complex ones
    log('');
    log('Properties as references');

    let complexUser = {
        name:'Charles',

        sizes: {
            height:182,
            width:50,
        },


    };

    log(complexUser);
    log(complexUser['sizes']['height']);

    let clone = Object.assign({}, complexUser);
    log(clone);

    log(complexUser['sizes'] == clone['sizes'])

    complexUser['sizes']['width']++;

    log(complexUser['sizes']['width']);
    log(clone['sizes']['width']);



    /*

    Summary 

        Objects are associative arrays with several special features

        They store properties ( key: value pairs), where:

            - Properties keys must be strings or symbols (usually strings).

            - Values van be ant type.

        To access a property, we can use:

            - The dot notation: obj.property .

            - Square brackets notation obj["property"].Square brackets allow to take the key from a variable, like onj[var]

        Additional operators:

            - To delete a property:  delete obj.prop . 

            - To check if a property with the given key exists : 'key' in obj .

            -  To iterate over an object: for(for key in obj) loop.


        Objects are assigned and copied by reference. In other words, a variable stores not the 'key value', but a 
        'reference' (address in memory) for the value. So copying such a variable or passing it as a function argument
        copies that reference, not the object. All operations via copied references (like adding/removing properties) are
        performed on the same single object.

        To make a 'real copy' (a clone) we can use the Object.assign

        All this is called a 'plain object' or just Object.

        There are many kinds of objects in JavaScript:

            - Array: to store ordered data collections.

            - Date: to store the informarion about the date and time.

            - Error: to store the information about an error

            - ...And so on

*/


log('')
log('')
log('')
log('')
log('Tasks');
log('')
log('')















