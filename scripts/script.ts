namespace cards {
  let suits = ['spades', 'hearts', 'clubs', 'diamonds'];
  let deck = [
    [2, suits[0]],
    [2, suits[1]],
    [2, suits[2]],
    [2, suits[3]],
    [3, suits[0]],
    [3, suits[1]],
    [3, suits[2]],
    [3, suits[3]],
    [4, suits[0]],
    [4, suits[1]],
    [4, suits[2]],
    [4, suits[3]],
    [5, suits[0]],
    [5, suits[1]],
    [5, suits[2]],
    [5, suits[3]],
    [6, suits[0]],
    [6, suits[1]],
    [6, suits[2]],
    [6, suits[3]],
    [7, suits[0]],
    [7, suits[1]],
    [7, suits[2]],
    [7, suits[3]],
    [8, suits[0]],
    [8, suits[1]],
    [8, suits[2]],
    [8, suits[3]],
    [9, suits[0]],
    [9, suits[1]],
    [9, suits[2]],
    [9, suits[3]],
    [10, suits[0]],
    [10, suits[1]],
    [10, suits[2]],
    [10, suits[3]],
    [11, suits[0]],
    [11, suits[1]],
    [11, suits[2]],
    [11, suits[3]],
    [12, suits[0]],
    [12, suits[1]],
    [12, suits[2]],
    [12, suits[3]],
    [13, suits[0]],
    [13, suits[1]],
    [13, suits[2]],
    [13, suits[3]],
    [14, suits[0]],
    [14, suits[1]],
    [14, suits[2]],
    [14, suits[3]],
  ];

  function shuffle() {
    let count = 0;
    let randomArr = Array(deck.length)
      .fill('')
      .map((v, k) => k);

    // Durstenfeld shuffle
    for (let x = randomArr.length - 1; x > 0; --x) {
      let y = Math.floor(Math.random() * (x + 1));
      let temp = randomArr[x];
      randomArr[x] = randomArr[y];
      randomArr[y] = temp;
    }

    return randomArr;
  }

  let shuffleArr = shuffle();
  let shuffledDeck = shuffleArr.map((v) => deck[v]);
  console.log(shuffledDeck);
}
