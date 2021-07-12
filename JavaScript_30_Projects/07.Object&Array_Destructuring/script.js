//destructuring is a concepts of having the result of any array or object destructed to indiviual varaible names 

// template literal usage :  let tpl = `My name is ${person.name}.`;    
// ******************************************
// ARRAY Destructuring
// ******************************************

const alphabets = ['A' ,'B','C','D','E','F']
const numbers = ['1' ,'2','3','4','5','6']

//EX:01 console the 1 and 3rd item , skip the 2nd and then get the rest of the items all destructured to new varaibles
// old way to get an indivial item from an array 
// const arrayitem1= alphabets[0]
// const arrayitem2 = alphabets[1]
// We can skip an item by not passing it but have a separator(,) at its place instead 
const [ arrayitem1 , , arrayitem3 , ...remains] = alphabets

console.log(`Printing the first item of alpahabets Array through destructing arrayitem1 : ${arrayitem1}`)
console.log(`Printing the first item of alpahabets Array through destructing arrayitem1 : ${arrayitem3}`)
console.log(...remains)
// copying one array to another 
const newremains = [...remains]
console.log(newremains)
// console.log(`Printing the remaing items of alpahabets Array ...remains : ${stringfyArray}`)

//Ex: 02 Combine two array using spread 
// old method to combine arrays 
const array3 = alphabets.concat(numbers)
console.log(`Combined array using concat method array3: ${array3}`)

//using destruct 
const array3D = [...alphabets , ...numbers]
console.log(`Combined array using destructure technique array3D: ${array3D}`)

// returing more than 1 paramater from a function 
//EX:03 display sum and multiple , division of the same array items by passing 3 paramters ( division set to default) to a function and have the results destructured 
// old method
function sumAndmulitplyAnddivision ( a , b ){
return [ a+b , a*b ]
}

const displayValue = sumAndmulitplyAnddivision( 2 , 3 )
console.log( `Displaying the sum , multiply and divison ${displayValue}`)

//using destructure 

function sumAndmulitplyAnddivision1 ( a, b ) {
    // return [ a+b , a*b ]   
    return [ a+b , a*b ,a/b ]   
}

const [sum , multiply , division = 'empty' ] = sumAndmulitplyAnddivision1 ( 2, 3 )
console.log( `Displaying the sum ${sum}, multiply ${multiply} and divison ${division}`)

// **************************************************************

// ******************************************
// OBJECT Destructuring
// ******************************************

const objectTemp = {
    name:'yamini',
    age:'12',
    address:{
        city:'bangalore',
        country:'india',
    },
    language:'french'
}

const objTemp2 = {
    age:'18',
    address:{
        city:'Chennai',
        // country:'india',
    }
}
//Ex:01 display the name and age from the object , use a differnt name for name key and print the same.
// OLD Without destructuring 
const name1 = objectTemp.name;
const age1 = objectTemp['ag'+'e'];
console.log(`Displaying name without destructuring Name1 : ${name1}`)
console.log(`Displaying name without destructuring Age1 : ${age1}`)
// With Destructuring 
const {name , age } = objectTemp
console.log(`Displaying name with destructuring Name : ${name}`)
console.log(`Displaying name with destructuring Age : ${age}`)                                                                    

//Ex:02 Use a defualt paramter.
// OLD Without destructuring 
// With Destructuring 
const { name :name2, age:age2 , favSport = 'Cricket' , language = 'English' , ...rest1} = objectTemp
console.log(`Displaying name with destructuring Name : ${name2}`)
console.log(`Displaying name with destructuring Age : ${age2}`)                                    
console.log(`Displaying name with destructuring favSport : ${favSport}`)
// When the defaulkt key already exist in the objectTemp then that value is displayed and not the default value 'English'
console.log(`Displaying name with destructuring language : ${language}`)
console.log(`Displaying name with destructuring language below using ...rest1`)
console.log(rest1)
 
//Ex:03 Get nested object key address from the object with nested destructuring .
// With Destructuring 
const {address:{city}} = objectTemp
console.log(`city nested in address is : ${city}`)

//EX:04 Combine two objects with spread [Note : secod object spread replaced the first object spread always ]
// With Destructuring 
// objTemp2 values will overwrite the objectTemp in the new objectThree object
const objectThree = {...objectTemp , ...objTemp2}
console.table(objectThree)

//EX:05 Object destructuring inside a function 
// OLD Without destructuring 

function objDest (object) {
    console.log(` NAME is ${object.name}`)
    console.log(` Age is ${object.age}`)
}

objDest(objectTemp)

// With Destructuring 

function objDest ({name , age}) {
    console.log(` NAME is ${name}`)
    console.log(` Age is ${age}`)
}

objDest(objectTemp)


