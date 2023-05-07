const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.querySelector(".close");

/* Open Modal */

// Open modal when "create a soiree" text is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when close button is clicked
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when user clicks outside of modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

/* Edit Modal */

// Get all edit buttons and edit modals
const editButtons = document.querySelectorAll('.card button#edit');
const editModals = document.querySelectorAll('.edit-modal');

// Loop through each edit button
editButtons.forEach((button, index) => {
    const editModal = editModals[index];
    const close = editModal.querySelector('#close');

    // Attach event listener to edit button
    button.addEventListener('click', () => {
        editModal.classList.add('show');
    });

    // Attach event listener to close button
    close.addEventListener('click', () => {
        editModal.classList.remove('show');
    });
});

/* Delete Modal */

const deleteButtons = document.querySelectorAll('.buttons button:last-of-type');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.nextElementSibling;
    modal.style.display = 'block';
    
    const yesButton = modal.querySelector('.btn-yes');
    yesButton.addEventListener('click', () => {
      button.closest('.card').remove();
      modal.style.display = 'none';
    });
    
    const noButton = modal.querySelector('.btn-no');
    noButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    const closeButton = modal.querySelector('#delete-close');
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
});

/* Header Dropdown */

const userButton = document.querySelector('.menu-toggle');
const dropdown = document.querySelector('.menu-dropdown');

userButton.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});