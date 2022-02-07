// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    
    // Global variables
    const alphabet = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      "(i/j)": 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55
    };

    const message = input.toLowerCase();
    let result = "";

    // Encoding
    if (encode) {
      for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
          result += message[i];
        } else {
          for (let letter in alphabet) {
            if (letter.includes(message[i])) result += alphabet[letter];
          };
        };
      };
    };

    // Decoding
    if (!encode) {
      if (message.split(" ").join("").length % 2 === 1) return false; 
      for (let i = 0; i < message.length; i += 2) {
        if (message[i] === " ") {
          result += message[i];
          i--;
        } else {
          for (let letter in alphabet) {
            if (alphabet[letter] == message[i] + message[i + 1]) result += letter;
          };
        };
      };
    };

    return result;

  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };