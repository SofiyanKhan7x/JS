const arr = [
    {
        itemName: "js course",
        price : 605
    },
    {
        itemName: "java course",
        price : 999
    },
    {
        itemName: "py course",
        price : 399
    },
]


const newArr = arr.reduce( (acc ,curval) => {
    return acc  + curval.price
},0 )

console.log(newArr);

