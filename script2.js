function showPopup() {
    // Load the JSON data
    fetch('sunny.json')
      .then(response => response.json())
      .then(data => {
        // Randomly select an object from the data array
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomItem = data[randomIndex];
  
        // Set the title and description in the popup
        document.getElementById('popupTitle').textContent = randomItem['Organization Name'];
        document.getElementById('popupAddress').textContent = `Address: ${randomItem.Address}`;
        document.getElementById('popupBorough').textContent = `Borough: ${randomItem.Borough}`;
        document.getElementById('popupMainPhone').textContent = `Main Phone: ${randomItem.MainPhone}`;
        document.getElementById('popupDiscipline').textContent = `Discipline: ${randomItem.Discipline}`;
        
        // Show the popup
        document.getElementById('popup').style.display = 'block';
      });
  }

  function showPopup1() {
    // Load the JSON data
    fetch('rainy.json')
      .then(response => response.json())
      .then(data => {
        // Randomly select an object from the data array
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomItem = data[randomIndex];
  
        // Set the title and description in the popup
        document.getElementById('popupTitle').textContent = randomItem['Organization Name'];
        document.getElementById('popupAddress').textContent = `Address: ${randomItem.Address}`;
        document.getElementById('popupBorough').textContent = `Borough: ${randomItem.Borough}`;
        document.getElementById('popupMainPhone').textContent = `Main Phone: ${randomItem.MainPhone}`;
        document.getElementById('popupDiscipline').textContent = `Discipline: ${randomItem.Discipline}`;
        
        // Show the popup
        document.getElementById('popup1').style.display = 'block';
      });
  }

  function showPopup2() {
    // Load the JSON data
    fetch('cold.json')
      .then(response => response.json())
      .then(data => {
        // Randomly select an object from the data array
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomItem = data[randomIndex];
  
        // Set the title and description in the popup
        document.getElementById('popupTitle').textContent = randomItem['Organization Name'];
        document.getElementById('popupAddress').textContent = `Address: ${randomItem.Address}`;
        document.getElementById('popupBorough').textContent = `Borough: ${randomItem.Borough}`;
        document.getElementById('popupMainPhone').textContent = `Main Phone: ${randomItem.MainPhone}`;
        document.getElementById('popupDiscipline').textContent = `Discipline: ${randomItem.Discipline}`;
        
        // Show the popup
        document.getElementById('popup2').style.display = 'block';
      });
  }