const tableBodyEl = document.querySelector(".table__body");

const renderHTML = function (attendees) {
  tableBodyEl.innerHTML = "";
  if (attendees.length) {
    document.querySelector(".search__error").style.display = "none";
    for (let el of attendees) {
      const rowEl = document.createElement("tr");
      rowEl.classList.add("table__row");
      const rowHTML = `
      <td class="table__cell">${el.id}</td>
      <td class="table__cell">${el.name}</td>
      <td class="table__cell">${el.surname}</td>
      <td class="table__cell">${el.age}</td>
    `;
      rowEl.innerHTML = rowHTML;
      tableBodyEl.append(rowEl);
    }
  } else {
    document.querySelector(".search__error").style.display = "";
    console.log("jel radi?");
  }
};

export default renderHTML;
