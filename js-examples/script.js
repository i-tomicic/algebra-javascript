import lectureData from "/data/data.js";
import render from "/modules/render.js";

const lectures = lectureData;
const searchFieldEl = document.querySelector("#searchField");
const searchErrorEl = document.querySelector(".search__error");

render(lectures);

searchFieldEl.addEventListener("keyup", (e) => {
  const filteredLectures = lectures.filter((lecture) => {
    return lecture.lectureName
      .toLowerCase()
      .includes(searchFieldEl.value.toLowerCase());
  });

  render(filteredLectures);

  if (!filteredLectures.length) {
    searchErrorEl.style.display = "block";
  } else {
    searchErrorEl.style.display = "none";
  }
});
