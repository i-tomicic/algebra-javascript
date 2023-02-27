import attendees from "/data/data.js";
import renderHTML from "/modules/render.js";

renderHTML(attendees);

const inputEl = document.querySelector("#search__input");
const orderEl = document.querySelector("#search__order");

let filteredList = attendees;

inputEl.addEventListener("keyup", () => {
  filteredList = [];
  for (let el of attendees) {
    if (el.name.toLowerCase().includes(inputEl.value.toLowerCase())) {
      filteredList.push(el);
    }
  }
  renderHTML(filteredList);
});

orderEl.addEventListener("change", () => {
  switch (orderEl.value) {
    case "default": {
      filteredList.sort((a, b) => a.id - b.id);
      renderHTML(filteredList);
      break;
    }
    case "ascending": {
      filteredList.sort((a, b) => a.age - b.age);
      renderHTML(filteredList);
      break;
    }
    case "descending": {
      filteredList.sort((a, b) => b.age - a.age);
      renderHTML(filteredList);
      break;
    }
  }
});
