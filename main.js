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
