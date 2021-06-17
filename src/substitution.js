// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
    let lower = input.toLowerCase();
    let final = '';

    const unique = {};

    for (i in alphabet.split('')) {
      const letter = alphabet[i];
      if (unique[letter]) {
        return false;
      } else {
        unique[letter] = true;
      }
    }



    if (encode === true) {
      for (let i = 0; i < lower.length; i++) {
        const letter = lower.charCodeAt(i);

        if (lower[i] === ' ') {
          final += ' ';
        } else {
          final += alphabet[letter - 97];
        }
      }
    }

    if (encode === false) {
      for (let i = 0; i < lower.length; i++) {
        const index = alphabet.split('').findIndex(letter => letter === lower[i]);
        if (lower[i] === ' ') {
          final += ' ';
        } else {
          final += String.fromCharCode(index + 97);
        }
      }
    }
    return final;
  }

  return {
    substitution,
  };
})();

module.exports = {
  substitution: substitutionModule.substitution
};