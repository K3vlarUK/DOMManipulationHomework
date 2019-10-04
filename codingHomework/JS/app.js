document.addEventListener('DOMContentLoaded', () => {

  const formInput = document.querySelector('#new-video-game-entry');
  formInput.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#deleteButton');
  deleteAll.addEventListener('click', clearStoredList);

  console.log('JavaScript Loaded');

});

const handleFormSubmit = function (event) {

  event.preventDefault();

  const gameListItem = createStoredGame(event.target);
  const newStoredGame = document.querySelector('.games-list');
  newStoredGame.appendChild(gameListItem);

  event.target.reset();

};

const createStoredGame = function (form) {

  const newGameContainer = document.createElement('div');

  const newGameTitle = document.createElement('h4');
  newGameTitle.textContent = form.gameTitle.value;
  newGameContainer.appendChild(newGameTitle);

  const newDatePurchased = document.createElement('p');
  newDatePurchased.textContent = form.datePurchased.value;
  newGameContainer.appendChild(newDatePurchased);

  const newGameCost = document.createElement('p');
  newGameCost.textContent = form.cost.value;
  newGameContainer.appendChild(newGameCost);

  const newSelection = document.createElement('p');
  newSelection.textContent = form.completed.value;
  newGameContainer.appendChild(newSelection);

  return newGameContainer;

};

const clearStoredList = function (event) {
  const clearDiv = document.querySelector('.games-list');
  clearDiv.innerHTML = "";
};
