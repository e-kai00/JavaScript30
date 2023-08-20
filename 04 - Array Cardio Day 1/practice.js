const pattern = /account/gi;
const content = document.querySelector('#bodyContent');
const ps = [...content.querySelectorAll('p')];
const account = ps.map(word => word.textContent);
const accountStr = account.join(' ');
const accountMatch = accountStr.match(pattern);
const total = accountMatch.length


const etsy = document.querySelector('.responsive-listing-grid');
const link = [...etsy.querySelectorAll('h3')];
const jade = link.map(heading => heading.textContent).filter(stoneName => stoneName.includes('jade'));



const arr1 = [1, 2, 3, 4];
const reduced = arr1.reduce((total, current) => total + current);
// console.log(reduced);

const arr2 = [1, 2, 3, 4];
const reduced1 = arr2.reduce((total, current) => {
  return total + current;
}, 2);
// console.log(reduced1)

arr2.reverse();
arr2.push(18);
const shiftted = arr2.shift();
const shifted = [shiftted]
shifted.unshift("wow")
// console.log(shifted)
// console.log(arr2)


const arr = ["m", "a", "n", "d", "e", "e", "p"];
// console.log(arr.join('*'));



// -----------------------------------------------sort()

// Sort an array of numbers in ascending order:
const numbers0 = [4, 2, 8, 5, 1, 3];

const sortNum = numbers0.sort((a, b) => a > b ? 1 : -1)
// console.log(sortNum)

// Sort an array of strings in alphabetical order:
const fruits = ["banana", "apple", "cherry", "date"];

// console.log(fruits.sort())
const reverseAlph = fruits.sort((a, b) => b > a ? 1 : -1)
// console.log(reverseAlph)

const reverseAlph1 = fruits.sort((a, b) => b.localeCompare(a))
// console.log(reverseAlph1)

// Sort an array of objects based on a specific property:
const students22 = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 22 }
];

const studentAge = students22.sort((a, b) => a.age > b.age ? 1 : -1)
// console.log(studentAge)

const studentAge1 = students22.sort((a, b) => a.age - b.age)
// console.log(studentAge1)

// Sort an array of strings in descending order:
const colors = ["red", "green", "blue", "yellow"];

const colorsBackwards = colors.sort((a, b) => b.localeCompare(a))
// console.log(colorsBackwards)
const colorsBackwards1 = colors.sort((a, b) => b > a ? 1 : -1)
// console.log(colorsBackwards1)

// Sort an array of objects alphabetically by a specific property:
const books22 = [
  { title: "JavaScript", author: "John" },
  { title: "Python", author: "Alice" },
  { title: "Java", author: "Bob" }
];

const bookTitleAlph = books22.sort((a,b) => a.title > b.title ? 1 : -1)
// console.log(bookTitleAlph)

const bookAuth = books22.sort((a, b) => b.author.localeCompare(a.author))
// console.log(bookAuth)


// ----map()
// Convert an array of numbers to their squared values:
const numbers22 = [1, 2, 3, 4, 5];

const squaredNum = numbers22.map(num => num * num)
// console.log(squaredNum)

// Convert an array of names to uppercase:
const names = ["alice", "bob", "charlie"];

// console.log(names.map(n1 => n1.toUpperCase()))
const nameUpper = names.map(n => n.toUpperCase())
// console.log(nameUpper)


// ----filter()
// Filter an array of numbers to get only the even numbers:
const numbers33 = [1, 2, 3, 4, 5,8, 20];

const evenNums = numbers33.filter(num => num % 2 == 0);
// console.log(evenNums)

// Filter an array of objects based on a specific condition
const products22 = [
  { name: "Apple", price: 1.99 },
  { name: "Banana", price: 0.99 },
  { name: "Orange", price: 2.49 },
  { name: "Mango", price: 3.99 }
];

const productPrice = products22.filter(p => p.price > 2)
// console.log(productPrice)





// -----------------------------------------------map()
// Task 1:
// Given an array of numbers, double each number in the array and return the new array.
const numbers1 = [1, 2, 3, 4, 5];

const doubled = numbers1.map(num => num * 2)
// console.log(doubled)

function doubleNum(num) {
  return num *2
}
// console.log(numbers1.map(doubleNum))


// Task 2:
// Given an array of strings, capitalize the first letter of each string and return the new array.
const strings1 = ['apple', 'banana', 'orange', 'kiwi'];

const capita = strings1.map(str => str.charAt(0).toUpperCase() + str.slice(1))
// console.log(capita)

function capita1(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
// console.log(strings1.map(capita1))


// Task 3:
// Given an array of objects representing products, return an array of just the product names.
const products1 = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];
const names10 = products1.map(product => product.name)
// console.log(names)

// Task 4:
// Given an array of temperatures in Celsius, convert each temperature to Fahrenheit and 
// return the new array.
const celsiusTemperatures = [20, 25, 30, 35, 40];

function fahrenheit(num) {
  return num *1.8 + 32
}
// console.log(celsiusTemperatures.map(fahrenheit))

const inFarenheit = celsiusTemperatures.map(temp => temp *1.8 + 32)
// console.log(inFarenheit)


// Task 5:
// Given an array of strings representing names, create an array of objects with a `name` 
// property and a `length` property indicating the length of each name.
const names1 = ['John', 'Alice', 'Bob', 'Eve'];

const smth1 = names1.map(function(n) {  
  return {name: n, length: n.length}
})
// console.log(smth1)
const smth2 = names1.map(n => ({name: n, length: n.length}))
// console.log(smth2)


// -----------------------------------------------filter()
// Task 1:
// Given an array of numbers, filter out the numbers that are less than 10.
const numbers2 = [5, 12, 8, 20, 3, 15];

const less10 = numbers2.filter(num => num < 10)
// console.log(less10)


// Task 2:
// Given an array of objects representing books, 
// filter out the books that were published before the year 2000.
const books2 = [
  { title: 'Book 1', year: 1995 },
  { title: 'Book 2', year: 2003 },
  { title: 'Book 3', year: 1998 },
];
const before2000 = books2.filter(book => book.year < 2000)
// console.table(before2000)


// Task 1: Filter an array of numbers to return only even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// (a)
const filterNum = numbers.filter(num => num % 2 === 0)
// console.log(filterNum)

// (b)
function filterNums(num) {
    return num % 2 === 0;
}

 const newNum = numbers.filter(filterNums)
//  console.log(newNum)


// Task 2: Filter an array of strings to return only strings that have a length greater than 5.
const strings = ['apple', 'banana', 'orange', 'kiwi', 'strawberry'];

const filterStr = strings.filter(str => str.length > 5)
// console.log(filterStr)

function longerStr(str) {
    return str.length > 5;
}
// console.log(strings.filter(longerStr))


// Task 3: Filter an array of objects representing books, and return only books 
// published in the last year.
const books = [
  { title: 'Book 1', year: 2020 },
  { title: 'Book 2', year: 2022 },
  { title: 'Book 3', year: 2022 },
  { title: 'Book 4', year: 2023 }
];

year = new Date().getFullYear();
 const filterBook = books.filter(book => book.year === year -1)
//  console.log(filterBook)

 function lastYearPublish(book) {
    return book.year === year - 1;
 }

//  console.log(books.filter(lastYearPublish))


// Task 4: Filter an array of objects representing students, 
// and return only students who have a grade above 90.
const students = [
  { name: 'John', grade: 86 },
  { name: 'Alice', grade: 95 },
  { name: 'Bob', grade: 89 },
  { name: 'Eve', grade: 92 }
];

const highGrade = students.filter(student => student.grade > 85 && student.grade < 93)
// console.log(highGrade)

function gradeHigh(student) {
    return student.grade > 90
}

// console.log(students.filter(gradeHigh))

// Task 5: Filter an array of objects representing products, 
// and return only products that are currently in stock.
const products = [
  { name: 'Product 1', inStock: true },
  { name: 'Product 2', inStock: false },
  { name: 'Product 3', inStock: true },
  { name: 'Product 4', inStock: false }
];

const productInStock = products.filter(product => !product.inStock)
// console.log(productInStock)

function inStockProduct(product) {
    return product.inStock
}
// console.log(products.filter(inStockProduct))


// Task 6: Filter an array of objects representing employees, 
// and return only employees who are full-time.
const employees = [
  { name: 'John', fullTime: true },
  { name: 'Alice', fullTime: false },
  { name: 'Bob', fullTime: true },
  { name: 'Eve', fullTime: true }
];

const fullTE = employees.filter(emp => emp.fullTime)
// console.log(fullTE)

// Task 7: Filter an array of objects representing movies, 
// and return only movies with a rating higher than 8.
const movies = [
  { title: 'Movie 1', rating: 7.5 },
  { title: 'Movie 2', rating: 8.2 },
  { title: 'Movie 3', rating: 9.1 },
  { title: 'Movie 4', rating: 7.8 }
];

const highRate = movies.filter(movie => movie.rating > 8.0)
// console.log(highRate)
