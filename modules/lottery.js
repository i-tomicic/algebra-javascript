import Player from "/modules/player.js";

export default class Lottery {
  constructor(people) {
    this.people = people;
    this.players = [];
    this.winningCombination = [];
  }

  getLotteryNumbers() {
    let lotteryNumbers = [];

    while (lotteryNumbers.length < 4) {
      let currentNumber = Math.floor(7 * Math.random()) + 1;
      if (!lotteryNumbers.includes(currentNumber)) {
        lotteryNumbers.push(currentNumber);
      }
    }
    lotteryNumbers.sort();
    return lotteryNumbers;
  }

  // Bornina verzija:
  generatePlayers() {
    this.people.map((person) => {
      const player = new Player(
        person.name,
        person.surname,
        this.getLotteryNumbers()
      );
      this.players.push(player);
    });
  }

  /* Moja verzija (radi super): 
  generatePlayers() {
    for (let i of this.people) {
      let currentLotteryNumbers = this.getLotteryNumbers();
      let currentPlayer = new Player(i.name, i.surname, currentLotteryNumbers);
      this.players.push(currentPlayer);
    }
  }
  */

  getWinningCombination() {
    this.winningCombination = this.getLotteryNumbers();
  }

  startDrawing() {
    this.generatePlayers();
    this.getWinningCombination();

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const winners = this.players.filter((player) =>
          player.lotteryNumbers.every(
            (val, index) => val === this.winningCombination[index]
          )
        );

        const result = {
          winningCombination: this.winningCombination,
          winners,
        };
        console.log(result);

        if (winners.length) {
          resolve(result);
          console.log("Ima pobjednika i to su:");
          console.log(winners);
        } else {
          console.log("nema pobjednika");
          reject(result);
        }
      }, 1000);
    });
  }
}
