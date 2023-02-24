const render = function (lectures) {
  const gridEl = document.querySelector(".grid");
  const searchErrorEl = document.querySelector(".search__error");

  gridEl.innerHTML = "";
  for (const lecture of lectures) {
    const cardEl = document.createElement("article");
    cardEl.classList.add("grid__card");
    const nameEl = document.createElement("p");
    nameEl.classList.add("grid__name");
    const valueEl = document.createElement("p");
    valueEl.classList.add("grid__value");

    nameEl.innerText = lecture.lectureName;
    valueEl.innerText = lecture.lectureLength + " days";

    cardEl.append(nameEl);
    cardEl.append(valueEl);
    gridEl.append(cardEl);
  }

  if (!lectures.length) {
    searchErrorEl.style.display = "block";
  } else {
    searchErrorEl.style.display = "none";
  }
};

export default render;
