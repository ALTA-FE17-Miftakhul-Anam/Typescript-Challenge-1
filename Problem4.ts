function caesarCipher(offset: number, input: string): string {
    let result = '';
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char === ' ') {
        result += ' ';
        continue;
      }
  
      let charCode = input.charCodeAt(i);
      let shiftedCode = ((charCode - 97 + offset) % 26) + 97;
  
      if (shiftedCode < 97) {
        shiftedCode += 26;
      }
  
      result += String.fromCharCode(shiftedCode);
    }
  
    return result;
  }
  
  console.log(caesarCipher(3, "abc")); // Output: def
  console.log(caesarCipher(2, "alta")); // Output: cnvc
  console.log(caesarCipher(10, "alterraacademy")); // Output: kvdobbkkmknowi
  console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // Output: bcdefghijklmnopqrstuvwxyza
  console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // Output: mnopqrstuvwxyzabcdefghijkl
  