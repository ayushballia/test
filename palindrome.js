function palindrome(str) {
  const myRegex = /[\W_]/g;
  const lowStr = str.toLowerCase().replace(myRegex, "");
  const revStr = lowStr.split("").reverse().join("");

  return lowStr == revStr;
}

console.log(palindrome("is this"));
