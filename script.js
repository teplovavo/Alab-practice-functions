/**
 * Which of these examples is best? Why? - The shortest and most compact approach is the best.
 */




//////////--------------------------------part 1 ------------------------------------
console.log("-----Part 1")


//Take an array of numbers and return the sum.
function sumArray (arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
const numbers = [1, 2, 3, 4];
console.log("Sum: ", sumArray(numbers));  //10

//Take an array of numbers and return the average.
function avArray(arr) {
    const total = sumArray(arr); //reused function
    return total / arr.length; 
}
console.log("Av: ", avArray(numbers));

//Take an array of strings and return the longest string.
function strArray(arr) {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
const strings = ["Sofa", "Stool", "Chair", "Credenza", "Bed"];
console.log("Str: ", strArray(strings));

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arr, num) {
    return arr.filter(str => str.length > num);
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbers(n) {
    if (n === 0) return; // Base case: stop when n reaches 0
    printNumbers(n - 1); // Recursive call with n-1
    console.log(n);
}
printNumbers(4);


//////////--------------------------------part 2 ------------------------------------
console.log("-----Part 2")

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: 41 }, 
    { id: "48", name: "Barry", occupation: "Runner", age: 25 }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 }, 
    { id: "7", name: "Bilbo", occupation: "None", age: 111 }
  ];
  
//Sort the array by age.
const sortedByAge = data.sort((a, b) => a.age - b.age);
console.log(sortedByAge);

//Filter the array to remove entries with an age greater than 50.
const underFifty = data.filter(person => person.age <=50);
console.log(underFifty);

//Map the array to change the “occupation” key to “job” and increment every age by 1.
const updatedData = data.map(person => ({
    ...person,
    job: person.occupation,
    age: Number(person.age) + 1
}));
console.log(updatedData);

//Use the reduce method to calculate the sum of the ages.
const sumAge = data.reduce((sum, person) => sum + Number(person.age), 0);
console.log("Sum Ages: ", sumAge);




//////////--------------------------------part 3 ------------------------------------
console.log("-----Part 3")

/* For this section, develop functions that accomplish the following:


/*Take an object and increment its age field.*/

function incrementAge(obj) {
    if (!obj.age) obj.age = 0;
    obj.age += 1;
}
const obj = {age: 30};
incrementAge(obj);
console.log(obj);


//Take an object, make a copy, and increment the age field of the copy. Return the copy.
function incrementAgeCopy(obj) {
    const copy = {...obj, age: (obj.age || 0) + 1, updated_at: new Date()};
    console.log(copy);
}
incrementAgeCopy({ name: 'John', age: 25 });

