/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
     const stack = []; //Last in First out
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);    
    } else if (legend[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length ? 0 : 1;
 };

 console.log(isValid("([)]"));