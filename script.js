function showPopup() {
  // Load the JSON data
  fetch('photography.json')
    .then(response => response.json())
    .then(data => {
      // Randomly select an object from the data array
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomItem = data[randomIndex];

      // Set the title and description in the popup
      document.getElementById('popupTitle').textContent = randomItem['Organization Name'];
      document.getElementById('popupAddress').textContent = `Address: ${randomItem.Address}`;
      document.getElementById('popupBorough').textContent = `Borough: ${randomItem.Borough}`;
      document.getElementById('popupMainPhone').textContent = `MainPhone: ${randomItem.MainPhone}`;
      document.getElementById('popupDiscipline').textContent = `Discipline: ${randomItem.Discipline}`;
      
      // Show the popup
      document.getElementById('popup').style.display = 'block';
    });
}

function closePopup1() {
  // Hide the popup
  document.getElementById('popup1').style.display = 'none';
}

function showPopup1() {
  // Load the JSON data
  fetch('theater.json')
    .then(response => response.json())
    .then(data => {
      // Randomly select an object from the data array
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomItem = data[randomIndex];

      // Set the title and description in the popup
      document.getElementById('popupTitle').textContent = randomItem['Organization Name'];
      document.getElementById('popupAddress').textContent = `Address: ${randomItem.Address}`;
      document.getElementById('popupBorough').textContent = `Borough: ${randomItem.Borough}`;
      document.getElementById('popupMainPhone').textContent = `MainPhone: ${randomItem.MainPhone}`;
      document.getElementById('popupDiscipline').textContent = `Discipline: ${randomItem.Discipline}`;
      
      // Show the popup
      document.getElementById('popup1').style.display = 'block';
    });
}

function closePopup1() {
  // Hide the popup
  document.getElementById('popup1').style.display = 'none';
}

  
  
  
  
  
  