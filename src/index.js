module.exports = function check(str, bracketsConfig) {
  let bracketsObj = Object.fromEntries(bracketsConfig);
  let stack = []

  for (i = 0; i < str.length; i++) {
    if (bracketsObj[stack[stack.length - 1]] == str[i]) {
      stack.pop();
    } else stack.push(str[i]);
  }
  return stack.length == 0;
}
