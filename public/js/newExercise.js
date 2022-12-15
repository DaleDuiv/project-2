const newExerciseHandler = async (event) => {
  event.preventDefault();

  const exerciseName = document.getElementById("exerciseName").value.trim();

  const response = await fetch("/api/exercises", {
    method: "POST",
    body: JSON.stringify({ exerciseName }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

//submit button, to display the add

var submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", newExerciseHandler);
