let count = 0;

// Builds the message text
function getMessage(clicks) {
  return "You clicked " + clicks + " times!";
}

// Increases the click count
function increaseCount() {
  count++;
  return count;
}

// Returns current count
function getCount() {
  return count;
}

// Resets count to 0
function resetCount() {
  count = 0;
}

// Runs when button is clicked
function showMessage() {
  increaseCount();
  document.getElementById("msg").innerText = getMessage(count);
}

// Export for testing (ignored by the browser)
if (typeof module !== "undefined") {
  module.exports = { getMessage, increaseCount, getCount, resetCount, showMessage };
}
