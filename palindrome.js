const reverseString = str => {
  return Array.from(str)
    .reverse()
    .join("");
};

// Defines a Phrase object.
function Phrase(content) {
  //property
  this.content = content;

  //function
  this.lowerStr = function lowerStr(str) {
    return str.toLowerCase();
  };
  this.lowerText = function lowerText() {
    return this.lowerStr(this.content);
  };
  this.palindrome = function palindrome() {
    return this.lowerText() === reverseString(this.lowerText());
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
