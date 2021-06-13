// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any helper code or variables here 

  function caesar(input, shift, encode=true) {
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    let code = '';
    // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lower = input.toLowerCase();

    if (encode === true) {
      for (let i = 0; i < lower.length; i++) {

       const letter = lower.charCodeAt(i);
       console.log(letter + shift + 26);
       let letterCode; 

      if (letter < 65 || letter > 90 && letter < 97 || letter > 122){
        letterCode = letter;
      } else if (letter + shift > 122) {
        letterCode = letter + shift - 26;
      } else if (letter + shift < 97) {
        letterCode = letter + shift + 26; 
      } else {
        letterCode = letter + shift;
      }
       const newLetter = String.fromCharCode(letterCode);
       code += newLetter;
      }
    return code;
    }

    if (encode === false) {
      for (let i = 0; i < lower.length; i++) {

       const letter = lower.charCodeAt(i);
       let letterCode; 

      if (letter < 65 || letter > 90 && letter < 97 || letter > 122){
        letterCode = letter;
      } else if (letter - shift > 122) {
        letterCode = letter - shift - 26;
      } else if (letter - shift < 97) {
        letterCode = letter - shift + 26; 
      } else {
        letterCode = letter - shift;
      }
       const newLetter = String.fromCharCode(letterCode);
       code += newLetter;
      }
      return code;
    }
  }

  return {
    caesar,
  };
})();


module.exports = {
  caesar: caesarModule.caesar
};