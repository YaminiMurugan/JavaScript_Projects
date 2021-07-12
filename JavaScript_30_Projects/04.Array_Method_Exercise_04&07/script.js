// Array method Exercises


const items = [
  { name:'Bike',      price:100 },
  { name:'TV',        price:200 },
  { name:'Album',     price:10 },
  { name:'Book' ,     price:5 },
  { name:'Phone',     price:500 },
  { name:'Computer',  price:1000 },
  { name:'Keyboard',  price:25 },
]
// ********************************************************
// Filter() : Callback func takes another func as an arugument  & returns a boolean value for the items that passes the test passed in the func .
// Only the items that pass the test ( boolean : true) will be in the new array

// EX:01 Get all items that are less than 100 dollars using filter()
// const filteredItem = items.filter( (item) => { return item.price <= 100} )
const filteredItem = items.filter(item => item.price <= 100)

console.log(filteredItem)
// ********************************************************
// Map() - is executed on every element of the array and returns a transformed array of same legth as the original array
// EX:02 Get the name of every element using map()
const transformedItem = items.map((item)=>{
  return item.name 
})
console.log(transformedItem)

// ********************************************************
// // join(' ') - converts an array to a string seperated by space here
const newtransformedItem = transformedItem.join(' ')
console.log(newtransformedItem)

// ********************************************************
// Find() - take a funtion as input and returns only one value for the condition passed 
// EX:03 Get the item with the name book using find()

const foundItem = items.find((item) => {
  return item.name == 'Book'
})

console.log(foundItem)

// ********************************************************
// Foreach() also runs the function passed as an argument once on every element of the array passed but do not return anything.
// EX:04 Get all the item prices of item array using foreach()

items.forEach((item) => {
  console.log(item.price) 
})

// ********************************************************
//some return only T/F for a function passed as an argument even if one of item satisfies the condition
// EX:05 Get all the item with price >= 1000 of item array using some() - here only one item has price 1000 still return true with some()
const someItem = items.some((item) => {
  return item.price >= 1000
})
console.log(someItem)

// ********************************************************
// every() - returns only T/F only when all the items in the array  passes the conditon in the function
// EX:06 Get all the item with price < 1000 of item array using every()

const everyItem = items.every((item)=>{
  return item.price <= 1000
})
console.log(everyItem)

// ********************************************************
// reduce() is used to reduce each item of an array to a single item returned . used for calculating total
// takes 2 arguments 1st - total ( initial value is 0 ) , 2nd- individual array item
// EX:07 Get the totol price of all items using reduce()
const reducedArray = items.reduce((total,item) => {
return total + item.price
}, 0)
console.log(reducedArray)

// ********************************************************
//include()- checks if the argument passed exists or not in the array and return onlky T/F
// EX:08 check if 2 is in the item array using include()
const item2 = [1,2,3,4,5]

const item2Found = item2.includes(1)
console.log(item2Found)
// ********************************************************


// // ## Array Cardio Day 1

    // // Some data we can work with

    // const inventors = [
    //   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    //   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    //   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    //   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    //   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    //   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    //   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    //   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    //   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    //   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    //   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    //   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    // ];

    // const people = [
    //   'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    //   'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    //   'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    //   'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    //   'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    // ];
    
    // // Array.prototype.filter()
    // // 1. Filter the list of inventors for those who were born in the 1500's

    // // Array.prototype.map()
    // // 2. Give us an array of the inventors first and last names

    // // Array.prototype.sort()
    // // 3. Sort the inventors by birthdate, oldest to youngest

    // // Array.prototype.reduce()
    // // 4. How many years did all the inventors live all together?

    // // 5. Sort the inventors by years lived

    // // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // // 7. sort Exercise
    // // Sort the people alphabetically by last name

    // // 8. Reduce Exercise
    // // Sum up the instances of each of these
    // const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];