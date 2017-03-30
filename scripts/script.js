var cards;
(function (cards) {
    var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
    var deck = [
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
        var count = 0;
        var randomArr = Array(deck.length)
            .fill('')
            .map(function (v, k) { return k; });
        for (var x = randomArr.length - 1; x > 0; --x) {
            var y = Math.floor(Math.random() * (x + 1));
            var temp = randomArr[x];
            randomArr[x] = randomArr[y];
            randomArr[y] = temp;
        }
        return randomArr;
    }
    var shuffleArr = shuffle();
    var shuffledDeck = shuffleArr.map(function (v) { return deck[v]; });
    console.log(shuffledDeck);
})(cards || (cards = {}));
//# sourceMappingURL=script.js.map