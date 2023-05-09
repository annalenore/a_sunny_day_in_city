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
  document.getElementById('popup').style.display = 'none';
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

function showPopup2() {
  // Load the JSON data
  fetch('visualart.json')
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
      document.getElementById('popup2').style.display = 'block';
    });
}

function closePopup2() {
  // Hide the popup
  document.getElementById('popup2').style.display = 'none';
}

function showPopup3() {
  // Load the JSON data
  fetch('science.json')
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
      document.getElementById('popup3').style.display = 'block';
    });
}

function closePopup3() {
  // Hide the popup
  document.getElementById('popup3').style.display = 'none';
}

function showPopup4() {
  // Load the JSON data
  fetch('multi-discipline.json')
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
      document.getElementById('popup4').style.display = 'block';
    });
}

function closePopup4() {
  // Hide the popup
  document.getElementById('popup4').style.display = 'none';
}

function showPopup5() {
  // Load the JSON data
  fetch('music.json')
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
      document.getElementById('popup5').style.display = 'block';
    });
}

function closePopup5() {
  // Hide the popup
  document.getElementById('popup5').style.display = 'none';
}

function showPopup6() {
  // Load the JSON data
  fetch('literature.json')
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
      document.getElementById('popup6').style.display = 'block';
    });
}

function closePopup6() {
  // Hide the popup
  document.getElementById('popup6').style.display = 'none';
}

function showPopup7() {
  // Load the JSON data
  fetch('museums.json')
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
      document.getElementById('popup7').style.display = 'block';
    });
}

function closePopup7() {
  // Hide the popup
  document.getElementById('popup7').style.display = 'none';
}

function showPopup8() {
  // Load the JSON data
  fetch('dance.json')
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
      document.getElementById('popup8').style.display = 'block';
    });
}

function closePopup8() {
  // Hide the popup
  document.getElementById('popup8').style.display = 'none';
}

  
  
  
  
  
  