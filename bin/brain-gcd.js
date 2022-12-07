#!/usr/bin/env node

/* eslint no-useless-concat: "off", curly: "error" */
/* eslint no-shadow: "off", curly: "error" */
/* eslint no-inner-declarations: "off", curly: "error" */

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let flag = 'win';
let win = 0;
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' + ' ' + `${name}` + '!');
console.log('Find the greatest common divisor of given numbers.');
while (flag === 'win') {
  const left = Math.floor(Math.random() * (0 - 100) + 100);
  const right = Math.floor(Math.random() * (0 - 100) + 100);
  console.log('Question:' + ' ' + `${left}` + ' ' + `${right}`);
  const answer = readlineSync.question('Your answer: ');
  function NOD(left, right) {
    if (right > left) {
      return NOD(right, left);
    }
    if (!right) {
      return left;
    }
    return NOD(right, left % right);
  }
  const i = NOD(left, right);
  if (answer === String(i)) {
    win += 1;
    console.log('Correct!');
  } if (answer !== String(i)) {
    console.log(`${answer}` + ' ' + 'is wrong answer ;(. Correct answer was' + ' ' + `${i}` + '.' + '\n' + "Let's try again," + ' ' + `${name}` + '!');
    flag = 'lose';
  }
  if (win === 3) {
    console.log('Congratulations,' + ' ' + `${name}` + '!');
    break;
  }
}
