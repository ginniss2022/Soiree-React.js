/* Adding Button to cards */
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  const button = document.createElement('button');
  button.innerText = 'RSVP Here!';
  button.classList.add('card-button');
  card.appendChild(button);
});

/* Header Dropdown */

const userButton = document.querySelector('.menu-toggle');
const dropdown = document.querySelector('.menu-dropdown');

userButton.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

/* Event Listener to Buttons */

const rsvpButtons = document.querySelectorAll('.card-button');
rsvpButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // change button text to "RSVP'd!"
    button.textContent = "RSVP'd!";
  });
});

fetch('http://127.0.0.1:5500/api/parties')
    .then(response => response.json())
    .then(partyData => {
      // Generate a card for each party
      const cardContainer = document.getElementById('content');
      partyData.forEach(party => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${party.image_url}" alt="${party.name}">
          <div class="card-info">
            <h2>${party.name}</h2>
            <p>Date: ${party.date}</p>
            <p>Time: ${party.time}</p>
            <p>Location: ${party.location}</p>
            <p>Description: ${party.description}</p>
          </div>
        `;
        cardContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching party data:', error);
    });