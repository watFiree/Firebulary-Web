const shuffleArray = (arr: string[]): string[] => {
  const shuffled = [];
  while (arr.length) {
    const index = Math.floor(Math.random() * arr.length);
    const chosen = arr.splice(index, 1)[0];
    shuffled.push(chosen);
  }

  return shuffled;
};

export default shuffleArray;
