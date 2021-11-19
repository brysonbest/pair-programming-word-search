const wordSearch = (letters, word) => {
  if (!Array.isArray(letters) || letters[0] === undefined) {
    return false;
  }
  if (typeof word !== 'string') {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = function(letters) {
    const newArray = [];
    for (let i = 0; i < letters[0].length; i++) {
      const arr = [];
      for (let j = 0; j < letters.length; j++) {
        arr.push(letters[j][i]);
      }
      newArray.push(arr);
    }
    return newArray;
  };
  const verticalLine = verticalJoin(letters).map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (let l of verticalLine) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;