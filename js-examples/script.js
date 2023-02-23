import lectureData from "/data/data.js";
import render from "/modules/render.js";

const lectures = lectureData;
const searchFieldEl = document.querySelector("#searchField");
const searchEl = document.querySelector(".search");

render(lectures);

searchFieldEl.addEventListener("keyup", (e) => {
  let searchValue = searchFieldEl.value.toLowerCase();
  const filteredLectures = [];
  for (const lecture of lectures) {
    // probaj s filter
    let lectureNameForSearch = lecture.lectureName;
    lectureNameForSearch = lecture.lectureName.toLowerCase();
    console.log(lectureNameForSearch);
    if (lectureNameForSearch.includes(searchValue)) {
      filteredLectures.push(lecture);
    }
  }
  render(filteredLectures);
  if (!filteredLectures.length) {
    const errorEl = document.createElement("p");
    errorEl.innerText = "No results found!";
    searchEl.append(errorEl); // treba urediti searchEl
  }
});
