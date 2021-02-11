const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = letters.map(vs => vs.join(''));
  const verticalArray = [];
  if (letters === []) {
    return false;
  }
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (let i = 0; i < verticalJoin.length; i++) {
    for (let j = 0; j < verticalJoin[i].length; j++) {
      // console.log(verticalJoin[j][i]);
      verticalArray.push(verticalJoin[j][i]);
    }
  }
  // console.log(verticalArray);
  // let almostFinal = verticalArray.join("").includes(word);
  // console.log('does the word exist vert: ', almostFinal);
  if (verticalArray.join("").includes(word)) {
    return true;
  }
  return false;
};
    
module.exports = wordSearch;
    
