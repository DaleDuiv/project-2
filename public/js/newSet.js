const newSetHandler = async (event) => {
  event.preventDefault();

  // You can get url_string from window.location.href if you want to work with
  // the URL of the current page
  var urlString = window.location.href;
  const urlParameter = urlString.split("/");

  const reps = document.getElementById("repsData").value.trim();
  const weight = document.getElementById("weightData").value.trim();
  //get the excercise_id from the url
  const exercise_id = urlParameter[3];

  const response = await fetch("/api/sets", {
    method: "POST",
    body: JSON.stringify({ reps, weight, exercise_id }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

//submit button, to display the add

var submitButton = document.getElementById("submitSetBtn");
submitButton.addEventListener("click", newSetHandler);
