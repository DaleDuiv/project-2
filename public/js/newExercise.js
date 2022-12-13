const newExerciseHandler = (event) => {
  event.preventDefault();
  //var exerciseModal = document.getElementById("id01");
  document.getElementById("exampleModal").style.display = "show";

  // window.alert("Hello World");
};

//submit button, to display the add
var newExerciseButton = document.getElementById("001");

newExerciseButton.addEventListener("click", newExerciseHandler);
document.getElementById("exampleModal").style.display = "none";
