const tokens = [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']];

const printToScreen = bool => {
  return bool ? console.log('balanced') : console.log('not balanced');
};

// 不要打乱function顺序！！！
const isParenthesis = char => {
  const str = '{}[]()<>';
  return str.indexOf(char) > -1 ? true : false;
};

const isOpenParenthesis = parenthesisChar => {
  for (const i of tokens) {
    return i[0] === parenthesisChar && true;
  }
  return false;
};

const matches = (topOfStack, closedParenthesis) => {
  for (const i of tokens) {
    if (i[0] === topOfStack && i[1] === closedParenthesis) {
      return true;
    }
  }
  return false;
};

const verify = inputStr => {
  const expression = inputStr.split('');
  const stack = [];
  for (const i of expression) {
    if (isParenthesis(i)) {
      if (isOpenParenthesis(i)) {
        stack.push(i);
      } else {
        if (stack.length === 0) {
          return printToScreen(false);
        }

        const top = stack.pop();

        if (!matches(top, i)) {
          return printToScreen(false);
        }
      }
    }
  }

  let returnValue = stack.length === 0 ? true : false;
  printToScreen(returnValue);
};

// Input any text;
verify(text);