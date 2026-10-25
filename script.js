let count = 0;

function showMessage() {
  count++;
  document.getElementById("msg").innerText = "You clicked " + count + " times!";
}
