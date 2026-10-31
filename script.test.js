/**
 * @jest-environment jsdom
 */
const {
  getMessage,
  increaseCount,
  getCount,
  resetCount,
  showMessage,
} = require("./script");

beforeEach(() => {
  resetCount();
  document.body.innerHTML = '<p id="msg"></p>';
});

// Test 1: Count starts at 0
test("count starts at 0", () => {
  expect(getCount()).toBe(0);
});

// Test 2: Count increases by 1
test("count increases by 1", () => {
  increaseCount();
  expect(getCount()).toBe(1);
});

// Test 3: Message text is correct
test("message for 5 clicks is correct", () => {
  expect(getMessage(5)).toBe("You clicked 5 times!");
});

// Test 4: Button click shows message on page
test("clicking button shows message", () => {
  showMessage();
  expect(document.getElementById("msg").innerText).toBe("You clicked 1 times!");
});

// Test 5: Three clicks show count 3
test("three clicks show count 3", () => {
  showMessage();
  showMessage();
  showMessage();
  expect(document.getElementById("msg").innerText).toBe("You clicked 3 times!");
});

// Test 6: Reset sets count back to 0
test("reset sets count to 0", () => {
  increaseCount();
  increaseCount();
  resetCount();
  expect(getCount()).toBe(0);
});

// Test 7: FAILURE TEST - wrong expected value on purpose
test("FAILURE TEST: one click expected count 2 (wrong on purpose)", () => {
  increaseCount();
  expect(getCount()).toBe(2);
});
// Test 8: Message for 1 click
test("message for 1 click is correct", () => {
  expect(getMessage(1)).toBe("You clicked 1 times!");
});
