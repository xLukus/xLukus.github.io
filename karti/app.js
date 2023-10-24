let searchBar = document.querySelector("#searchBar");
let searchBody = document.querySelector("#text").innerText;
let indexElement = document.querySelector("#index");

searchBar.addEventListener("input", search, false);

function search() {
  let searchTerm = searchBar.value.toLowerCase();
  let desiredIndex = searchBody.toLowerCase().search(searchTerm);
  indexElement.innerText = "@ index: " + desiredIndex;
}
