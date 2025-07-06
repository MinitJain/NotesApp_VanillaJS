const container = document.getElementsByClassName("Container");
const input = document.getElementById("input-field");
const addButton = document.getElementById("addBtn");
const notes = document.querySelector(".Notes-container");

addButton.addEventListener("click", (event) => {
  handleaddNotes();
});

const handleaddNotes = () => {
  const note = document.createElement("p");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

  if (input.value.trim() === "") {
    alert("Please add a note");
  } else {
    const noteText = input.value;
    note.textContent = noteText;
    note.appendChild(deleteButton);
    notes.appendChild(note);
    input.value = "";

    deleteButton.addEventListener("click", function () {
      notes.removeChild(note);
    });
  }
};
