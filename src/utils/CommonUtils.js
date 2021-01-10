export const shuffle = (array) => {
  let temp;
  let randomIdx;
  let currentIdx = array.length;
  while (0 !== currentIdx) {

    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;

    temp = array[currentIdx];
    array[currentIdx] = array[randomIdx];
    array[randomIdx] = temp;
  }
  return array;
}

export const cleanString = (string) => {
  let tempStr = string.replace(/&#039;/g, "'");
  return tempStr.replace(/&quot;/g, '"');
}

export const convertDifficultyLevel = (difficulty) => {
  let level;
  if (difficulty === "Go easy on me") {
    level = 'easy';
  }
  if (difficulty === "Bring it on") {
    level = 'medium';
  }
  if (difficulty === "Insanity mode") {
    level = 'hard';
  }
  return level;
}