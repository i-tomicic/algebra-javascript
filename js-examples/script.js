import lectureData from "/data/data.js";
import render from "/modules/render.js";

const lectures = lectureData;
const searchFieldEl = document.querySelector("#searchField");

render(lectures);

searchFieldEl.addEventListener("keyup", (e) => {
  const filteredLectures = lectures.filter((lecture) => {
    return lecture.lectureName
      .toLowerCase()
      .includes(searchFieldEl.value.toLowerCase());
  });

  render(filteredLectures);
});
