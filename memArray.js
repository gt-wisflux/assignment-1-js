const members = [
  {name: 'Aman Makhija', age: 20},
  {name: 'Himanshu Jangid', age: 40},
  {name: 'Vijay Sahu', age: 41},
  {name: 'Rakesh Srivastava', age: 17},
  {name: 'Chandraprakash Sharma'},
  {name: 'Kartik Dhwan', age: 45},
  {name: 'Hardik Dhawan', age: 51}
];

// Array of first names
const firstNames = members.map((mem)=>{
  return mem.name.split(' ')[0]
})
console.log("1. ",firstNames)

// Array of last names in uppercase
const lastNamesUpperCase = members.map(mem=>{
  return mem.name.split(' ')[1].toUpperCase()
})
console.log("2. ",lastNamesUpperCase)

// Array of full names of members with age between 41 and 60
const between41and60 = members.filter(mem=>{
  return mem.age >= 41 && mem.age <= 60
})
console.log("3. ",between41and60)

// Get average age
const allAge = members.map(mem=>{
  if (mem.age === undefined) {
    return 0
  }
  return mem.age
})
console.log(allAge)
const sum = allAge.reduce((partialSum, a) => partialSum + a, 0);
const averageAge = sum / allAge.length;
console.log("4. Avg age:", averageAge)

const maxAge = Math.max(...allAge)
console.log("5. Max age:", maxAge)

// Dividing persons in groups result should look like { 'young': [], 'old': [], 'noage': [] }
// Less than 35yrs is young, above 35 is old
const groups = (array) => {
  return array.reduce((acc, item) => {
    if (item.age === undefined) {
      acc.noage.push(item);
    } else if (item.age < 35) {
      acc.young.push(item);
    } else {
      acc.old.push(item);
    }
    return acc;
  }, { young: [], old: [], noage: [] });
};
console.log("6. ",groups(members))

// Push new member to the members array at index 2
const newMem1 = {name: 'Sanjay Sharma', age: 20}
members.splice(2, 0, newMem1)
console.log("7. ", members)

// extract first and second element using destructing
const [first, second] = members
console.log("8. ", first, second)

// Create a new array instance adding a new member at index 0, and keeping existing afterwards
console.log("9. ")
const newMem2 = {name: 'Devesh Patel', age: 16}
const newMembersArray = [newMem2, ...members] 
//newMembersArray.splice(0, 0, newMem2)
console.log(newMembersArray)

// Extract properties of object using destructuring
console.log("10. ")
for (let i = 0; i < members.length; i++) {
  const {name, age} = members[i]
  console.log(name, age)
}

// Rename extracted property of object while destructing
console.log("11. ")
for (let i = 0; i < members.length; i++) {
  const {name: fullName, age} = members[i]
  console.log(fullName, age)
} 


// Destructure any property of an object and use spread operator to get remaining properties in an object
console.log("12. ")
for (let i = 0; i < members.length; i++) {
  const {name, ...rest} = members[i]
  console.log(name)
  console.log(rest)
} 

// Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const newMembersObj = {...members[0], age: 25}
console.log("13. ", newMembersObj)

// Use reduce function on array and object
// On Array 
const arr = [1,2,3,4,5]
const sumOfArr = arr.reduce((total, num)=>total+num, 0)
console.log("14.1 ", sumOfArr)

// On Object 
const obj = {a: 1, b: 2, c: 3}
const sumOfObjValues = Object.values(obj).reduce((total, num)=>total+num, 0)
console.log("14.2 ", sumOfObjValues)
