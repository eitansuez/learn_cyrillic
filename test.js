const readlineSync = require('readline-sync');
const numeral = require('numeral');

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщыэюя";
var answers = ['a', 'b', 'v', 'g', 'd', 'ye', 'yo', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'shya', 'i', 'e', 'yoo', 'ya'];

function randomInt (high) {
  return Math.floor(Math.random() * high);
}

function pickanindex() {
  return randomInt(alphabet.length);
}

function pickaletter(index) {
  return alphabet[index];
}

function prompt(letter) {
  return readlineSync.question(letter+'? ');
}

function iscorrectanswer(index, answer) {
  return answer === answers[index];
}

function showcorrectanswer(index) {
  console.log(answers[index]);
}

function isquit(answer) {
  return answer === 'quit';
}

function percentit(right, total) {
  return numeral(right / total).format('0.0%');
}

function printscore(right, total) {
  console.log("score: %s", percentit(right, total));
}
function printrate(start, total) {
  var end = new Date(), duration_ms = (end - start);
  var rate_per_ms = total / duration_ms;
  var rate_per_minute = rate_per_ms * 1000 * 60;
  var rate_fmt = numeral(rate_per_minute).format('0.0');
  console.log("rate: %s questions / minute", rate_fmt);
}

var answer = '', right = 0 ,total = 0;
var start = new Date();

while(!isquit(answer)) {
  var index = pickanindex();
  var letter = pickaletter(index);
  var answer = prompt(letter);
  if (isquit(answer)) {
    break;
  }
  total++;
  if (iscorrectanswer(index, answer)) {
    console.log('yeah!');
    right++;
  } else {
    console.log("don't think so!");
    showcorrectanswer(index);
  }
}

printscore(right, total);
printrate(start, total);

console.log('bye');
