module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let openBr = bracketsConfig.map(arrOfPair => arrOfPair[0]); // массив открывающихся скобок
  let closeBr = bracketsConfig.map(arrOfPair => arrOfPair[1]); // массив закрывающихся скобок



  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (openBr.includes(char)) {

      //если скобки одинаковые и последняя в стеке такая же => удаляем из стека
      if (closeBr.includes(char) && stack[stack.length - 1] === char) {
        stack.pop(char);
      } else {
        stack.push(char); // иначе добавляем в стек
      }

    } else { // скобка закрывающаяся неповторная
      //если не равна парной открывающейся return false 
      let pairOpenBr = openBr[closeBr.indexOf(char)];

      if (stack.length === 0 || pairOpenBr !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
}
