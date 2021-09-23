const body = document.body;

const columns = body.querySelectorAll(".column");
columns.forEach((column) => {
  column.addEventListener("click", function () {
    const selectedColumn = body.querySelector(".column--selected");
    selectedColumn.classList.remove("column--selected");
    this.classList.add("column--selected");
  });
  const cards = column.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const selectedCard = body.querySelector(".card--selected");
      selectedCard.classList.remove("card--selected");
      this.classList.add("card--selected");
    });
  });
});
