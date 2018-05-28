const reverseString = str => {
  return Array.from(str).reverse().join("");
};

// Defines a Phrase object.
function Phrase(content) {
  //property
  this.content = content;

  //function
  this.palindrome = () => {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverseString(processedContent);
  };
  this.louder = () =>{
    return this.content.toUpperCase();
  };
}
