(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("js_tutorial_palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  console.log(phrase.content);

  let palindromeResult = document.querySelector("#palindromeResult");
  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `<strong>"${
      phrase.content
    }"</strong> is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `<strong>"${
      phrase.content
    }"</strong> is a not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function() {
    palindromeTester(event);
  });
});

},{"js_tutorial_palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this)
    .reverse()
    .join("");
};

// practice
String.prototype.isBlank = function() {
  return !!this.match(/^(\s)*$/);
};
Array.prototype.last = function() {
  return this[this.length - 1];
};

// Defines a Phrase object.
function Phrase(content) {
  //property
  this.content = (content == null) ? "" : content;

  //function
  this.lowerStr = function lowerStr(str) {
    return str.toLowerCase();
  };

  this.lowerText = function lowerText() {
    return this.lowerStr(this.letters());
  };

  // Returns the letters in the content.
  this.letters = function letters() {
    // reduceでもできるが、filterのほうがシンプルか
    return Array.from(this.content).filter(char => char.match(/(\w|[^\x01-\x7E\xA1-\xDF^、。「」])/)).join("");
  };

  this.palindrome = function palindrome() {
    return this.lowerText().isBlank() ? false : this.lowerText() === this.lowerText().reverse();
  };

  this.louder = function louder() {
    return this.content.toUpperCase();
  };
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // method override
  this.lowerText = function lowerText() {
    return this.lowerStr(this.translation);
  };
}
TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
