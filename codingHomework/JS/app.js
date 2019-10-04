document.addEventListener('DOMContentLoaded', () => {

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const newGameContainer = document.createElement('div');

    const newGameTitle = document.createElement('h4');
    newGameTitle.textContent = `${event.target.gameTitle.value}`;
    newGameContainer.appendChild(newGameTitle);

    const newDatePurchased = document.createElement('p');
    newDatePurchased.textContent = `${event.target.datePurchased.value}`;
    newGameContainer.appendChild(newDatePurchased);

    const newGameCost = document.createElement('p');
    newGameCost.textContent = `${event.target.cost.value}`;
    newGameContainer.appendChild(newGameCost);

    const newSelection = document.createElement('p');
    newSelection.textContent = `${event.target.completed.value}`;
    newGameContainer.appendChild(newSelection);

    const newStoredGame = document.querySelector('.games-list');
    newStoredGame.appendChild(newGameContainer);

    formInput.reset();
  };

  const formInput = document.querySelector('#new-video-game-entry');
  formInput.addEventListener('submit', handleFormSubmit);

  const clearStoredList = function () {
    const clearDiv = document.querySelector('.games-list');
    clearDiv.innerHTML = "";
  }

  const deleteAll = document.querySelector('#button');
  deleteAll.addEventListener('click', clearStoredList);

  console.log('JavaScript Loaded');
});
