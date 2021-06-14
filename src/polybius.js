// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if (input.length%2 != 0) {
           return false;
     };
     
   let word = '';
     
   if (encode === true) {
     let lower = input.toLowerCase();
 
     for (let i = 0; i < lower.length; i++) {
       switch(lower[i]) {
         case 'a': 
           word += 11;
           break;
         case 'b':
           word += 21;
           break;
         case 'c':
           word += 31;
           break;
         case 'd':
           word += 41;
           break;
         case 'e':
           word += 51;
           break;
         case 'f':
           word += 12;
           break;
         case 'g':
           word += 22;
           break;
         case 'h':
           word += 32;
           break;
         case 'i':
         case 'j':
           word += 42;
           break;
         case 'k':
           word += 52;
           break;
         case 'l':
           word += 13;
           break;
         case 'm':
           word += 23;
           break;
         case 'n':
           word += 33;
           break;
         case 'o':
           word += 43;
           break;
         case 'p':
           word += 53;
           break;
         case 'q':
           word += 14;
           break;
         case 'r':
           word += 24;
           break;
         case 's':
           word += 34;
           break;
         case 't':
           word += 44;
           break;
         case 'u':
           word += 54;
           break;
         case 'v':
           word += 15;
           break;
         case 'w':
           word += 25;
           break;
         case 'x':
           word += 35;
           break;
         case 'y':
           word += 45;
           break;
         case 'z':
           word += 55;
           break;
         }
       }
     }
       
     if (encode === false) {
       let decode = input.split(/(?=(?:..)*$)/);
 
       for (let i = 0; i < decode.length; i++) {
         let dec = decode[i];
         switch(dec) {
         case '11': 
           word += 'a';
           break;
         case '21':
           word += 'b';
           break;
         case '31':
           word += 'c';
           break;
         case '41':
           word += 'd';
           break;
         case '51':
           word += 'e';
           break;
         case '12':
           word += 'f';
           break;
         case '22':
           word += 'g';
           break;
         case '32':
           word += 'h';
           break;
         case '42':
           word += '(i/j)';
           break;
         case '52':
           word += 'k';
           break;
         case '13':
           word += 'l';
           break;
         case '23':
           word += 'm';
           break;
         case '33':
           word += 'n';
           break;
         case '43':
           word += 'o';
           break;
         case '53':
           word += 'p';
           break;
         case '14':
           word += 'q';
           break;
         case '24':
           word += 'r';
           break;
         case '34':
           word += 's';
           break;
         case '44':
           word += 't';
           break;
         case '54':
           word += 'u';
           break;
         case '15':
           word += 'v';
           break;
         case '25':
           word += 'w';
           break;
         case '35':
           word += 'x';
           break;
         case '45':
           word += 'y';
           break;
         case '55':
           word += 'z';
           break;
         }
       };
     }
   return word;
 }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
