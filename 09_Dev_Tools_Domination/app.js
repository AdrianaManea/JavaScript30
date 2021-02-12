const dogs = [{
  name: 'Snickers',
  age: 2
}, {
  name: 'Hugo',
  age: 8
}];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = 'magenta';
  p.style.fontSize = '50px';
}


// Regular
console.log('Hello');


// Interpolated
console.log('Hello I am a %s string!', 'beautiful');
// console.log(`I am a ${test}`);


// Styled
console.log('%c I am some great text', 'font-size:30px; background-color:indigo; text-shadow: 10px 10px 0 blue');


// Warning!
console.warn('OH NOOO');


// Error :|
console.error('OH MY GOODNESS');


// Info
console.info('Some fungi create zombies, then control their minds');


// Testing
// console.assert will only fire if something is false
// If true, nothing will happen
// So you don't have to have an if statement in here
// You can test for something, and if it is false it will through the error into your console
const p = document.querySelector('p');
console.assert(p.classList.contains('testy'), 'That is wrong');


// Clearing
// console.clear(p);


// Viewing DOM Elements
// .log show you the element itself
console.log(p);
// .dir gives you a dropdown; see the classList, children, dataset, all the different properties and methods that live in that element in prototype
console.dir(p);


// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age *7} dog years old`);
  console.groupEnd(`${dog.name}`);
});


// counting
console.count('Bulina');
console.count('Mandolina');
console.count('Mandolina');
console.count('Bulina');
console.count('Bulina');
console.count('Mandolina');
console.count('Mandolina');
console.count('Bulina');
console.count('Bulina');


// Timing 
// if you want to see how long something takes
// start a timer
console.time('fetching data');
// do something that takes time
fetch('http://api.github.com/users/adrianamanea')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
// there is also performance.now() in the browser


// Table
console.table(dogs);