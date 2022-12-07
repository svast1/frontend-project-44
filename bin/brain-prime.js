#!/usr/bin/env node

/* eslint no-useless-concat: "off", curly: "error" */
/* eslint no-inner-declarations: "off", curly: "error" */

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let flag = 'win';
let win = 0;
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' + ' ' + `${name}` + '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
while (flag === 'win') {
  const num = Math.floor(Math.random() * (0 - 100) + 100);
  console.log('Question: ' + `${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== 'yes' && answer !== 'no') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".' + '\n' + "Let's try again," + ' ' + `${name}` + '!');
    flag = 'lose';
  }
  function prime(n) {
    const m = Math.sqrt(n);
    let isPrime = 'true';
    for (let i = 2; i <= m; i += 1) {
      if (n % i === 0) {
        isPrime = 'false';
        break;
      }
    }
    return isPrime;
  }
  const check = prime(num);
  if (check === 'true' && answer === 'yes') {
    console.log('Correct!');
    win += 1;
  } if (check !== 'true' && answer === 'no') {
    console.log('Correct!');
    win += 1;
  } if (check === 'true' && answer === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".' + '\n' + "Let's try again," + ' ' + `${name}` + '!');
    flag = 'lose';
  } if (check !== 'true' && answer === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".' + '\n' + "Let's try again," + ' ' + `${name}` + '!');
    flag = 'lose';
  } if (win === 3) {
    console.log('Congratulations,' + ' ' + `${name}` + '!');
    break;
  }
}
