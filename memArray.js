//import lodash from 'lodash';
var _ = require('lodash');

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
console.log("1. ", _.map(members, 'name'))

// Array of last names in uppercase
console.log("2. ", _.map(members, (mem)=>{
  if (mem.name === undefined) {
    return ''
  }
  return _.split(mem.name, ' ')[1].toUpperCase()
}))

// Array of full names of members with age between 41 and 60
console.log("3. ", _.filter(members, (mem)=>{return mem.age >= 41 && mem.age <= 60}))

const allAge = _.map(members, 'age')
// Get average age
console.log('4.', _.meanBy(members, m=>m.age))

// Max age
console.log('5.', _.max(allAge))

// Dividing persons in groups result should look like { 'young': [], 'old': [], 'noage': [] }
// Less than 35yrs is young, above 35 is old
//const groups = (array) => {
//  return array.reduce((acc, item) => {
//    if (item.age === undefined) {
//      acc.noage.push(item);
//    } else if (item.age < 35) {
//      acc.young.push(item);
//    } else {
//      acc.old.push(item);
//    }
//    return acc;
//  }, { young: [], old: [], noage: [] });
//};
//console.log("6. ",groups(members))

const groups = _.groupBy(members, (mem)=>{
  if (mem.age === undefined) {
    return 'noage'
  } else if (mem.age < 35) {
    return 'young'
  } else {
    return 'old'
  }
})
console.log("6. ",groups)

// Push new member to the members array at index 2
const newMem1 = {name: 'Sanjay Sharma', age: 20}
members.splice(2, 0, newMem1)
console.log("7. ", members)

// extract first and second element using destructing
const [first, second] = members
console.log("8. ", first, second)

// Create a new array instance adding a new member at index 0, and keeping existing afterwards
console.log("9. ")
console.log(_.concat({name: 'Devesh Patel', age: 16}, members))

// Extract properties of object using destructuring
console.log("10. ")
_.map(members, ({name, age})=>{
  console.log(name, age)
})

// Rename extracted property of object while destructing
console.log("11. ")
_.map(members, ({name: fullName, age})=>{
  console.log(fullName, age)
})

// Destructure any property of an object and use spread operator to get remaining properties in an object
console.log("12. ")
_.map(members, ({name, ...rest})=>{
  console.log(name)
  console.log(rest)
})

// Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const newMembersObj = {...members[0], age: 25}
console.log("13. ", newMembersObj)

// Use reduce function on array and object
// 1. On Array 
const arr = [1,2,3,4,5]
console.log("14.1 ", _.reduce(arr, (total, num)=>total+num, 0))

// 2. On Object 
const obj = {a: 1, b: 2, c: 3}
console.log("14.2 ", _.reduce(Object.values(obj), (total, num)=>total+num, 0))

