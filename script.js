//your JS code here. If required.
document.getElementById("ageForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form inputs
  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");
  
  // Validate inputs
  if (ageInput.value.trim() === '' || nameInput.value.trim() === '') {
    alert("Please fill out all fields.");
    return;
  }

  // Create a promise
  const agePromise = new Promise((resolve, reject) => {
    // Simulate asynchronous processing after 4 seconds
    setTimeout(() => {
      const age = parseInt(ageInput.value);
      if (age >= 18) {
        resolve(nameInput.value);
      } else {
        reject(nameInput.value);
      }
    }, 4000);
  });

  // Handle promise resolution/rejection
  agePromise.then((name) => {
    alert(`Welcome, ${name}. You can vote.`);
  }).catch((name) => {
    alert(`Oh sorry ${name}. You aren't old enough.`);
  });

  // Reset form after submission
  ageInput.value = '';
  nameInput.value = '';
});