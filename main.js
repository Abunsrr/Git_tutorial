// JavaScript code example

// Function to handle form submission
function handleRegistrationForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Perform validation or additional processing if needed
  
    // Display a confirmation message
    alert('Thank you for registering!');
  
    // Reset the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }
  
  // Attach event listener to the registration form
  const registrationForm = document.querySelector('form');
  registrationForm.addEventListener('submit', handleRegistrationForm);
  