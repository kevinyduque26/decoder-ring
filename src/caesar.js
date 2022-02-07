// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    // Error handling
    if (shift === 0 || shift > 25 || shift < -25) return false;

    // Global variables
    const message = input.toLowerCase();
    let result = "";

    // Encoding
    if (encode === true) {
      
              
      for (let i = 0; i < message.length; i++) {

        const charCode = message.charCodeAt(i);
  
        if (charCode < 97 || charCode > 122) {
          result += String.fromCharCode(charCode)
        } 
          
        if (charCode >= 97 && charCode <= 122 && shift > 0) {
          if (charCode + shift <= 122) result += String.fromCharCode(charCode + shift);
          if (charCode + shift > 122) result += String.fromCharCode(96 + (charCode + shift - 122));
        };

        if (charCode >= 97 && charCode <= 122 && shift < 0) {
          if (charCode + shift >= 97) result += String.fromCharCode(charCode + shift);
          if (charCode + shift < 97) result += String.fromCharCode(123 + (charCode + shift - 97));
        };
      };           
    };

    // Decoding
    if (encode === false) {
                    
      for (let i = 0; i < message.length; i++) {

        const charCode = message.charCodeAt(i);
  
        if (charCode < 97 || charCode > 122) {
          result += String.fromCharCode(charCode)
        } 
          
        if (charCode >= 97 && charCode <= 122 && shift > 0) {
          if (charCode - shift >= 97) result += String.fromCharCode(charCode - shift);
          if (charCode - shift < 97) result += String.fromCharCode(123 + (charCode - shift - 97));
        };

        if (charCode >= 97 && charCode <= 122 && shift < 0) {
          if (charCode - shift <= 122) result += String.fromCharCode(charCode - shift);
          if (charCode - shift > 122) result += String.fromCharCode(96 + (charCode - shift - 122));
        };
      };       
    };

    return result;
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
