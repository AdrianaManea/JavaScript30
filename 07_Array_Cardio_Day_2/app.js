const people = [{
    name: 'Wes',
    year: 1988
  },
  {
    name: 'Kait',
    year: 1986
  },
  {
    name: 'Irv',
    year: 1970
  },
  {
    name: 'Lux',
    year: 2015
  }
];

const comments = [{
    text: 'Love this!',
    id: 523423
  },
  {
    text: 'Super good',
    id: 823423
  },
  {
    text: 'You are the best',
    id: 2039842
  },
  {
    text: 'Ramen is my fav food ever',
    id: 123523
  },
  {
    text: 'Nice Nice Nice!',
    id: 542328
  }
];

// Some and Every Checks
// Array.prototype.some() - check's if at least one thing in your array meets what you're looking for
// is at least one person 19 or older?

// const isAdult = people.some(function (person) {
//   const currentYear = (new Date()).getFullYear();
//   if (currentYear - person.year >= 19) {
//     return true;
//   }
// });

// same thing as above but cleaner - 01
// const isAdult = people.some(person => {
//   const currentYear = (new Date()).getFullYear();
//   return currentYear - person.year >= 19;
// });

// same thing as above but cleaner, even shorter - 02
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({
  isAdult
});



// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({
  allAdult
});



// Array.prototype.find()
// Find is like filter(), but instead of returning you a subset of the array it returns the first item you are looking for/that it finds

// find the comment with the ID of 823423
// const comment = comments.find(function (comment) {
//   if (comment.id === 823423) {
//     return true;
//   }
// });

// same thing as above but cleaner
const comment = comments.find(comment => comment.id === 823423);

console.log(comment);



// Array.prototype.findIndex()
// find() where something is inside of an array
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);

console.log(index);

// How do you delete it?
// 1
comments.splice(index, 1);

// 2
// Create a new Array of the updated comments
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];

console.table(comments);
console.table(newComments);