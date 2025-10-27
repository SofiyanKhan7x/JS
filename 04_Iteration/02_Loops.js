// const myObject = {
//     'name' : 'suffu',
//     'insta' : "suffu7x"
// }

// for (const key of object) {
    
    
//     console.log(key);
    
// }


// const map = new Map();
// map.set(2,3)
// map.set("dd","33")
// map.set(4,3)

// for..of loop is used for arrays
// const arr = [ 33,445, "spiderman"]

// for (const key of arr){
//     console.log(key);
    
// }


// for..in loop is used for objects
// const myObject = {
//     'name' : 'suffu',
//     'insta' : "suffu7x"
// }

// for (const key in myObject) {
    
    
//     console.log(key , myObject[key]);
    
// }



// forEach loop is mainly used for arrays

// const myArr = ["spiderMan","TonyStark","Thor","Dr.Strang"]
const arr = [
    {
        'name' : 'suffu',
        'role' : 'employer'
    },
    {
        'name' : 'sufiyan',
        'role': 'Renter'
    }
]


arr.forEach( (item) => {
    console.log(item.name);
    
} )