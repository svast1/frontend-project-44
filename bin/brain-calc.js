#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Game!');
let flag = 'win';
let win = 0;
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' + ' ' + `${name}` + '!');
console.log('What is the result of the expression?');
while (flag === 'win') {
  const actions = ['+', '-', '*'];
  const left = Math.floor(Math.random() * (0 - 20) + 20);
  const right = Math.floor(Math.random() * (0 - 20) + 20);
  const rnActions = actions[Math.floor(Math.random() * (0 - 3) + 3)];
  const Question = eval(left + rnActions + right);
  console.log('Question:' + ' ' + `${left}` + ' ' + `${rnActions}` + ' ' + `${right}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === String(Question)) {
    console.log('Correct!');
    win += 1;
  }
  if (answer !== String(Question)) {
    console.log(`${answer}` + ' ' + 'is wrong answer ;(. Correct answer was' + ' ' + `${Question}`, '\n', "Let's try again," + ' ' + `${name}` + '!');
    flag = 'lose';
  }
  if (win === 3) {
    console.log('Congratulations,' + ' ' + `${name}` + '!');
    break;
  }
}
