// 
// Object destructuring
// 

// const person = {
//     name: 'Marcus',
//     age: 34,
//     location: {
//         city: 'Recife',
//         temp: 15
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


// 
// Array destructuring
// 

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [street, city, state, zip] = address;
// console.log(`You're in ${city}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , medium] = item;
console.log(`A medium ${product} costs ${medium}`);