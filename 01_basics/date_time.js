let createdDate = new Date();

// console.log(createdDate.toString());
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleDateString());
// console.log(createdDate.getMilliseconds());


let CustomDate = new Date();

console.log(CustomDate.toLocaleDateString('default',{
    weekday: 'long'
}));

