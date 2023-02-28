import attendees from "/data/data.js";
import renderHTML from "/modules/render.js";

renderHTML(attendees);

const inputEl = document.querySelector("#search__input");
const orderEl = document.querySelector("#search__order");

let filteredList = attendees;

inputEl.addEventListener("keyup", () => {
  filteredList = [];
  filteredList = attendees.filter((attendee) =>
    attendee.name.toLowerCase().includes(inputEl.value.toLowerCase())
  );
  renderHTML(filteredList);
});

orderEl.addEventListener("change", () => {
  switch (orderEl.value) {
    case "def": {
      filteredList.sort((a, b) => a.id - b.id);
      renderHTML(filteredList);
      break;
    }
    case "asc": {
      filteredList.sort((a, b) => a.age - b.age);
      renderHTML(filteredList);
      break;
    }
    case "desc": {
      filteredList.sort((a, b) => b.age - a.age);
      renderHTML(filteredList);
      break;
    }
    case "name_asc": {
      filteredList.sort((a, b) => (a.name > b.name ? 1 : -1));
      renderHTML(filteredList);
      break;
    }
    case "name_desc": {
      filteredList.sort((a, b) => (a.name < b.name ? 1 : -1));
      renderHTML(filteredList);
      break;
    }
  }
});
