module.exports = function check(str, bracketsConfig) {
  let bracketsObj = Object.fromEntries(bracketsConfig);
  let stack = []

  for (i = 0; i < str.length; i++) {

    if (str[i] in bracketsObj) {
      stack.push(str[i]);
    } else {
      if (bracketsObj[stack[stack.length - 1]] == str[i]) {
        stack.pop();
      } else return false;
    }
  }
 return stack.length ==0;
}
