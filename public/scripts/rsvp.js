/* Adding Button to cards */
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  const button = document.createElement('button');
  button.innerText = 'Remove RSVP';
  button.classList.add('card-button');
  card.appendChild(button);
});

/* Event Listener to Buttons */

const rsvpButtons = document.querySelectorAll('.card-button');
rsvpButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // change button text to "RSVP'd!"
    button.textContent = "RSVP Removed!";
  });
});