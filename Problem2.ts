// Ubah Huruf
function ubahHuruf(sentence: string): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Abjad normal
  const shiftedAlphabet = "KLMNOPQRSTUVWXYZABCDEFGHIJ"; // Abjad geseran

  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    const index = alphabet.indexOf(char.toUpperCase());

    // Jika karakter bukan huruf, tambahkan langsung ke hasil enkripsi
    if (index === -1) {
      result += char;
    } else {
      const isLowerCase = sentence[i] === char.toLowerCase();
      const shiftedChar = isLowerCase
        ? shiftedAlphabet[index].toLowerCase()
        : shiftedAlphabet[index];
      result += shiftedChar;
    }
  }

  return result;
}

console.log(ubahHuruf("SEPULSA OKE")); // Output: COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // Output: KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // Output: SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // Output: QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // Output: ZBYQBKWWOB
