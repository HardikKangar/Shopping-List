// Get references to elements
const shoppingList = document.querySelector('ul');
const inputElement = document.querySelector('input');
const addButton = document.querySelector('button');

// Function to add a new item to the shopping list
function addItem() {
  // Step 1: Store the current value of the input element in a variable
  const newItem = inputElement.value;

  // Step 2: Empty the input element
  inputElement.value = '';

  // Step 3: Create new elements (list item, span, and button)
  const listItem = document.createElement('li');
  const spanElement = document.createElement('span');
  const deleteButton = document.createElement('button');

  // Step 4: Append the span and the button as children of the list item
  listItem.appendChild(spanElement);
  listItem.appendChild(deleteButton);

  // Step 5: Set the text content of the span to the input element value
  spanElement.textContent = newItem;
  deleteButton.textContent = 'Delete';

  // Step 6: Append the list item as a child of the list
  shoppingList.appendChild(listItem);

  // Step 7: Attach an event handler to the delete button to delete the list item when clicked
  deleteButton.addEventListener('click', function () {
    shoppingList.removeChild(listItem);
  });

  // Step 8: Use the focus() method to focus the input element for the next entry
  inputElement.focus();
}

// Step 9: Attach the addItem function to the button's click event
addButton.addEventListener('click', addItem);

// Optional Step 10: Allow adding items by pressing the Enter key
inputElement.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addItem();
  }
});