// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {

    // Error handling
    if (!alphabet || alphabet.length !== 26) return false; 

    let check = [];
    if (alphabet) {
      for (let i = 0; i < alphabet.length; i++) {
        if (check.includes(alphabet[i])) {
          return false;
        } else { 
          check.push(alphabet[i]);
        };
      };
    }; 

    // Array prep
    const substitutionAlphabetArray = alphabet.split("");
    let i = 0;
    let mappedAlphabetTable = [];

    if (encode) {
      substitutionAlphabetArray.forEach((substitution) => {
        mappedAlphabetTable[String.fromCharCode(97 + i)] = substitution;
        i++;
      });
    };

    if (!encode) {
      substitutionAlphabetArray.forEach((substitution) => {
        mappedAlphabetTable[substitution] = String.fromCharCode(97 + i);
        i++;
      });
    };
    
    // Other global variables
    const message = input.toLowerCase();
    let result = "";

    // The magic  
    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") result += message[i];
      if (message[i] !== " ") result += mappedAlphabetTable[message[i]];
    };

    return result; 

  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
