import Lottery from "/modules/lottery.js";
import { politicians, folk } from "/data/data.js";

const buttonStartLotteryEl = document.querySelector(".button-start-lottery");
const lotteryResultsEl = document.querySelector(".lottery-results");
const winningCombinationEl = document.querySelector(".winning-combination");
const winnersMessageEl = document.querySelector(".winners-message");
const winnersEl = document.querySelector(".winners");

const lottery = new Lottery(politicians);

buttonStartLotteryEl.addEventListener("click", () => {
  buttonStartLotteryEl.disabled = true;
  buttonStartLotteryEl.innerText = "Lottery drawing in progress...";
  lotteryResultsEl.style.display = "none";

  lottery
    .startDrawing()
    .then((result) => {
      console.log("EJ IMA POBJEDNIKA JEBOTE");
      lotteryResultsEl.style.display = "block";
      winningCombinationEl.innerText = `Winning combination was: ${result.winningCombination}`;
      winnersMessageEl.innerText = "Winners: ";

      let winnersList = "";
      result.winners.forEach((winner) => {
        winnersList += `<li>${winner.getPlayerDetails()}</li>`;
      });

      winnersEl.innerHTML = winnersList;
    })
    .catch((result) => {
      console.log("JEBOTE NEMA POBJEDNIKA");
      winnersEl.style.display = "none";
      winningCombinationEl.innerText = `Winning combination was: ${result.winningCombination}`;
      winnersMessageEl.innerText = "There are no winners";
    })
    .finally(() => {
      buttonStartLotteryEl.innerText = "Start lottery drawing";
      buttonStartLotteryEl.disabled = false;
      lotteryResultsEl.style.display = "block";
    });
});
