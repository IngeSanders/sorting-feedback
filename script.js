$(function () {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const items = document.querySelectorAll("#sortable li img");
  const volgorde = Array.from(items).map(img => img.alt);
  console.log("Ingediende volgorde:", volgorde);

  const juisteVolgorde = ["Afbeelding 1", "Afbeelding 2", "Afbeelding 3"];
  const feedbackDiv = document.getElementById("feedback");

  if (JSON.stringify(volgorde) === JSON.stringify(juisteVolgorde)) {
    feedbackDiv.innerText = "✅ Dit is de juiste volgorde!";
    feedbackDiv.style.color = "green";
  } else {
    feedbackDiv.innerText = "❌ Dit klopt nog niet helemaal, probeer opnieuw.";
    feedbackDiv.style.color = "red";
  }
});
