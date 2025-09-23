const  arr = [12,"hello", 100.22,true];

// console.log(arr[0]);

// const arr2 = 
// console.log( typeof arr);


const arr2 = [0,1,2,3,4,5];

// console.log("A = " , arr2);
// console.log("slice ",arr2.slice(1,3) );   slice method can't manipulate the real Array
// console.log("Aafter slice = " , arr2);

// console.log("A = " , arr2);
// console.log("slice ",arr2.splice(1,3) ); // Splice methid actully manipulate the real array
// console.log("Aafter slice = " , arr2);

// console.log(arr2.length);

//  arr.push(arr2);
//  arr.concat(arr2);

// console.log(arr.concat(arr2));
// console.log(arr);

let to = [...arr,...arr2];

console.log(typeof arr);
