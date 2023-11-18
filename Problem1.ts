// Play With Asterisk
function playWithAsterik(n: number): string {
  let result = "";
  for (let i = 1; i <= n; i++) {
    // Tambahkan spasi sebelum bintang
    for (let j = 1; j <= n - i; j++) {
      result += " ";
    }
    // Tambahkan bintang
    for (let k = 1; k <= i; k++) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
}

console.log(playWithAsterik(5));
