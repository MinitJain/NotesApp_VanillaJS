const container = document.getElementsByClassName("Container");
const input = document.getElementById("input-field");
const addButton = document.getElementById("addBtn");
const notes = document.querySelector(".Notes-container");

addButton.addEventListener("click", (event) => {
  handleaddNotes();
});

const handleaddNotes = () => {
  const note = document.createElement("p");
  note.textContent = input.value;
  notes.appendChild(note);
  input.value = "";
};
