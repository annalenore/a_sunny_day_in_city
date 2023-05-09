function showPopup() {
    // Load the JSON data
    fetch('bronx.json')
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
    fetch('manhattan.json')
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
    fetch('brooklyn.json')
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

  function showPopup3() {
    // Load the JSON data
    fetch('queens.json')
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
        document.getElementById('popup3').style.display = 'block';
      });
  }

  function showPopup4() {
    // Load the JSON data
    fetch('statenisland.json')
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
        document.getElementById('popup4').style.display = 'block';
      });
  }