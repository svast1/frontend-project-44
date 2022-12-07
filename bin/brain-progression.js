#!/usr/bin/env node

/* eslint no-useless-concat: "off", curly: "error" */

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let flag = 'win';
let win = 0;
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' + ' ' + `${name}` + '!');
console.log('What number is missing in the progression?');
while (flag === 'win') {
  const length = Math.floor(Math.random() * (5 - 10) + 10);
  const increase = Math.floor(Math.random() * (2 - 5) + 5);
  let num = (Math.floor(Math.random() * (0 - 40) + 40));
  const randomIndex = Math.floor(Math.random() * (0 - length) + length);
  const array = [];
  array.push(num);
  while (array.length !== length) {
    array.push(num += increase);
  }
  const check = String(array[randomIndex]);
  array[randomIndex] = '..';
  const Question = array.join(' ');
  console.log('Question: ' + `${Question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === check) {
    console.log('Correct!');
    win += 1;
  } if (answer !== check) {
    console.log(`${answer}` + ' ' + 'is wrong answer ;(. Correct answer was' + ' ' + `${check}` + '.' + '\n' + "Let's try again," + ' ' + `${name}` + '!');
    flag = 'lose';
  } if (win === 3) {
    console.log('Congratulations,' + ' ' + `${name}` + '!');
    break;
  }
}
