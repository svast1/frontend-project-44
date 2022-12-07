#!/usr/bin/env node

/* eslint no-useless-concat: "off", curly: "error" */

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let flag = 'win';
let win = 0;
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' + ' ' + `${name}` + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no"');
while (flag === 'win') {
  const Question = Math.floor(Math.random() * (0 - 100) + 100);
  console.log('Question:' + ' ' + `${Question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== 'yes' && answer !== 'no') {
    flag = 'lose';
    console.log('"yes" is wrong answer ;(. Correct answer was "no".' + '\n' + "Let's try again," + ' ' + `${name}` + '!');
  }
  if (Question % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    win += 1;
  } if (Question % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
    win += 1;
  } if (Question % 2 !== 0 && answer === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".', '\n', "Let's try again," + ' ' + `${name}` + '!');
    flag = 'lose';
  }
  if (Question % 2 === 0 && answer === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".', '\n', "Let's try again," + ' ' + `${name}` + '!');
    flag = 'lose';
  }
  if (win === 3) {
    console.log('Congratulations,' + ' ' + `${name}` + '!');
    break;
  }
}
