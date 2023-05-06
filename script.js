function showPopup() {
    // Load the JSON data
    fetch('photography.json')
      .then(response => response.json())
      .then(data => {
        // Randomly select an object from the data array
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomItem = data[randomIndex];
  
        // Set the title and description in the popup
        document.getElementById('popupTitle').textContent = randomItem.title;
        document.getElementById('popupDescription').textContent = randomItem.description;
  
        // Show the popup
        document.getElementById('popup').style.display = 'block';
      });
  }
  
  function closePopup() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
  }

  
  
  
  
  
  